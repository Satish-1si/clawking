import React, { useState, useEffect, useRef } from 'react';
import protoRoot from './proto/proto.js'
import protobuf from 'protobufjs'
import "../../css/clawking.css"
// import '../../css/GameControls.css';
import WinPopup from "./WinPopup"; // adjust the path
import { useNavigate } from "react-router-dom"; // React Router
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


let UI = ""
let MN = ""
let GI = ""
let videoLink = ""
let socketURL = ""
let tp = ""

if (true) {
  UI = "682845d4e0a488e1083ca4b4"
  MN = "84ADFCF1237C"
  GI = "670f60219d6cefc370346657"
  videoLink = "https://15.206.133.82:1985/rtc/v1/whep/?app=live&stream=CK_09-01.flv";
  socketURL = "wss://3.111.179.100:59199/ws";
  tp = "ACJ3winyybgztU1YH"

}
else {
  UI = "67a70fbc2b5c81c619d3b4fd"
  MN = "889C869B79D4"
  GI = "672c59aef9d203e7fecb1a97"
  videoLink = "http://15.206.133.82:1985/rtc/v1/whep/?app=live&stream=CK_11-01.flv";
  socketURL = "ws://localhost:59199/ws";
  tp = "GtlF214I80UaJoqaf"
}



const WebSocketComponent = () => {

  const [socket, setSocket] = useState(null);
  const [StartPlaying, startPlayingVisible] = useState(true);
  const [ControlButtons, ControlButtonsVisible] = useState(false);
  const [WinScreen, setWinScreen] = useState(false);
  const [failScreen, setFailScreen] = useState(false);
  const [catching, catchingVisible] = useState(false);
  const [gameDuration, setGameDuration] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [controls, setControls] = useState({ isrender: false })
  const [videoReady, setVideoReady] = useState(false);
  const navigate = useNavigate();
  console.log("catchingVisible",catching)
  // if(true)
  // {
  //    UI = "682845d4e0a488e1083ca4b4"
  //    MN = "84ADFCF1237C"
  //    GI = "670f60219d6cefc370346657"
  //    videoLink="http://15.206.133.82:1985/rtc/v1/whep/?app=live&stream=CK_09-01.flv";
  //    socketURL = "ws://3.111.179.100:59199/ws";
  //    tp="ACJ3winyybgztU1YH"

  // }
  // else{
  //    UI = "67a70fbc2b5c81c619d3b4fd"
  //    MN = "889C869B79D4"
  //    GI = "672c59aef9d203e7fecb1a97"
  //    videoLink="http://15.206.133.82:1985/rtc/v1/whep/?app=live&stream=CK_11-01.flv";
  //    socketURL = "ws://localhost:59199/ws";
  //    tp="GtlF214I80UaJoqaf"
  // }

  let GameId = ''

  // const socketURL = "ws://3.111.179.100:59199/ws";

  const OnWinScreen = () => {
    setWinScreen(true);

  }
  const OffWinScreen = () => {
    setWinScreen(false);

  }

  const onFailScreen = () => {
    setFailScreen(true);
  }
  const OffFailScreen = () => {
    setFailScreen(false);
  }
  const OffStartPlaying = () => {
    startPlayingVisible(false)
  }

  const OnStartPlaying = () => {
    startPlayingVisible(true)
  }


  const changestatus = (status) => {
    // Animate 30% discount if status is true
    const productCostElem = document.getElementById("product_cost");
    if (productCostElem && status) {
      // Clean and parse the original price
      const rawText = productCostElem.textContent.trim();
      const originalPrice = Number(rawText.replace(/[^0-9.]/g, "")) || 0;

      const discountedPrice = originalPrice * 0.7; // 30% discount
      const duration = 1000; // animation duration in milliseconds
      const frameRate = 60; // frames per second

      let frame = 0;
      const totalFrames = Math.round((duration / 300) * frameRate);
      const increment = (discountedPrice - originalPrice) / totalFrames;

      const animatePrice = () => {
        frame++;
        const newPrice = originalPrice + increment * frame;
        productCostElem.textContent = newPrice.toFixed(2);

        if (frame < totalFrames) {
          requestAnimationFrame(animatePrice);
        } else {
          // Ensure final value is exactly discounted price
          productCostElem.textContent = discountedPrice.toFixed(2);
        }
      };

      requestAnimationFrame(animatePrice);
    }
  }
  const ResetForPlay = () => {
    OffFailScreen();
    OffWinScreen();
    OffCatchingButton();
    OffControlButtons();
    OnStartPlaying();
    setGameDuration(0);
    //handle static page
    changestatus(true)
  }

  const OnControlButtons = () => {
    ControlButtonsVisible(true);
  };
  const OffControlButtons = () => {
    ControlButtonsVisible(false);
  };

  const OnCatchingButton = () => {
    catchingVisible(true)
  }

  const OffCatchingButton = () => {
    catchingVisible(false)
  }

  const formatTime = (seconds) => {
    return seconds.toString().padStart(2, "0");
  };

  useEffect(() => {
    if (!isGameRunning) return;

    const interval = setInterval(() => {
      setGameDuration(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          setIsGameRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [isGameRunning]);


  const videoRef = useRef(null);
  useEffect(() => {
    const pc = new RTCPeerConnection();

    pc.ontrack = (event) => {
      if (videoRef.current) {
        videoRef.current.srcObject = event.streams[0];
      }
    };

    // Add transceivers before creating offer
    pc.addTransceiver("video", { direction: "recvonly" });
    pc.addTransceiver("audio", { direction: "recvonly" });

    const startStream = async () => {
      try {
        // Create and set local description
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        // POST the SDP offer to SRS WHEP endpoint
        const res = await fetch(
          videoLink,
          {
            method: "POST",
            headers: { "Content-Type": "application/sdp" },
            body: offer.sdp,
          }
        );

        if (!res.ok) {
          throw new Error(`WHEP request failed with status ${res.status}`);
          setControls(({ isrender: false }))
        }
        else if (res.ok) {
          setControls(({ isrender: true }))
        }

        // Get SDP answer and set remote description
        const answer = await res.text();

        await pc.setRemoteDescription({ type: "answer", sdp: answer });
      } catch (err) {
        console.error("❌ WHEP playback error:", err);
      }
    };

    startStream();

    // Cleanup on unmount
    return () => pc.close();
  }, []);

  useEffect(() => {

    const ws = new WebSocket(socketURL);
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connection established.");
      Login(ws);
    };

    ws.onmessage = (event) => {
      try {
        let buffer;
        if (event.data instanceof ArrayBuffer) {
          // Already an ArrayBuffer
          buffer = new Uint8Array(event.data);
          handleBuffer(buffer);
        } else if (event.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => {
            buffer = new Uint8Array(reader.result);
            handleBuffer(buffer);
          };
          reader.readAsArrayBuffer(event.data);
        } else {
          console.warn("Unexpected WebSocket data type:", typeof event.data);
        }
      }
      catch (err) {
        console.error("Failed to decode message:", err);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = (event) => {
      if (event.wasClean) {
        console.log(`WebSocket closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error("WebSocket closed unexpectedly.");
      }
    };

    function handleBuffer(buffer) {
      try {
        const resData = protoRoot.lookupType("DataPackage").decode(buffer);
        console.log(resData);
        if (resData.packageType === 0) {
          enterRoom(ws);
        } else if (resData.packageType === 2) {
          GameId = resData.startQueueMessage.gameID;
          console.log("GameId:", GameId);
        }
        else if (resData.packageType === 14) {
          if (resData.playGameOrder.order === 1) {
            OffStartPlaying();
            OnControlButtons();
            StartGame(ws);
          }
        }
        else if (resData.packageType === 3) {
          setGameDuration(resData.startGameMessage.gameDuring);
          setIsGameRunning(true);
        }
       else if (resData.packageType === 13) {
  console.log("Result: " + resData.wawaResultMessage.data);

  if (resData.wawaResultMessage.data == 1) {
    OnWinScreen();
    localStorage.setItem("gameResult", true);

    // Show overlay first, then navigate after short delay
    setTimeout(() => {
      navigate("/noon");
      setControls((pre) => ({ ...pre, isrender: false }));
       window.location.reload();
       ResetForPlay()
    }, 2000); // adjust delay based on popup animation
  } else {
    onFailScreen();
    localStorage.setItem("gameResult", false);
    // Fail overlay is already working, but still delay for consistency
    setTimeout(() => {
      navigate("/noon");
      setControls((pre) => ({ ...pre, isrender: false }));
       window.location.reload();
       ResetForPlay()
    }, 2000);

  }
}

      } catch (err) {

        console.error("Protobuf decode error:", err);
      }
    }

    // Clean up WebSocket connection when component unmounts
    return () => {
      ws.close();
    };
  }, [socketURL]);

  const StartQueue = () => {
    let payload = {
      packageType: 2,
      startQueueMessage: {
        userID: UI,
        macNo: MN,
        isServerSide: true,
        startQueueResult: 1,
        des: "Test",
        totalGold: 6,
        gameDuring: 30,
        playTime: 10,
        giftID: GI,
        playAgain: true
      },
    };
    protoRoot.resolveAll();
    let testObj = protoRoot.lookup("DataPackage").create(payload);
    console.log(testObj);
    let testObjBuffer = protoRoot.lookup("DataPackage").encode(testObj).finish();
    socket.send(testObjBuffer);
  };

  const StartGame = (wsOverride) => {
    let payload = {
      packageType: 3,
      startGameMessage: {

        userID: UI,
        macNo: MN,
        isServerSide: false,
        startGameResult: 1,
        des: "Test",
        ballCount: 10,
        totalGold: 6,
        totalScore: 10,
        gameDuring: 30,
        giftID: GI,
        gameID: GameId
      },
    };
    protoRoot.resolveAll();
    let testObj = protoRoot.lookup("DataPackage").create(payload);
    let testObjBuffer = protoRoot.lookup("DataPackage").encode(testObj).finish();
    wsOverride.send(testObjBuffer);
  };

  const Login = (wsOverride) => {
    let payload = {
      packageType: 0,
      loginMessage: {
        userID: UI,
        tempPasswd: tp,
        isServerSide: true,
        loginResult: true
      }
    };
    protoRoot.resolveAll();
    let testObj = protoRoot.lookup("DataPackage").create(payload);
    let testObjBuffer = protoRoot.lookup("DataPackage").encode(testObj).finish();
    wsOverride.send(testObjBuffer);
  };

  const enterRoom = (wsOverride) => {
    console.log("Room")
    let payload = {
      packageType: 9,
      enterRoomMessage: {
        userID: UI,
        macNo: MN,
        giftID: GI,
      }

    };
    let enterRoomObj = protoRoot.lookup("DataPackage").create(payload);
    let enterRoomObjBuffer = protoRoot.lookup("DataPackage").encode(enterRoomObj).finish();
    wsOverride.send(enterRoomObjBuffer);
  };

  const ExitQ = () => {

    let payload = {
      packageType: 16,
      cancelGameMessage: {
        userID: UI,
        macNo: MN,
        isServerSide: false,
        cancelResult: 4,
        des: "5",
        totalGold: 0,
        refundGold: 0,
        giftID: GI,
        gameID: inputMessage
      }
    };
    console.log(payload)
    let enterRoomObj = protoRoot.lookup("DataPackage").create(payload);
    console.log(enterRoomObj)
    let enterRoomObjBuffer = protoRoot.lookup("DataPackage").encode(enterRoomObj).finish();
    console.log(enterRoomObjBuffer)
    socket.send(enterRoomObjBuffer);

  };

  const ExitRoom = () => {

    let payload = {
      packageType: 8,
      enterRoomMessage: {
        userID: UI,
        macNo: MN,
        totalGold: 0,
        totalScore: 0,
        isServerSide: false,
        webrtcClientID: "",
        isMeOperation: false
      }

    };
    let enterRoomObj = protoRoot.lookup("DataPackage").create(payload);
    let enterRoomObjBuffer = protoRoot.lookup("DataPackage").encode(enterRoomObj).finish();
    socket.send(enterRoomObjBuffer);
  };

  const Movement = (_data) => {

    let payload = {
      packageType: 12,
      wawaMoveMessage: {
        userID: UI,
        macNo: MN,
        data: _data,
      }
    };
    let enterRoomObj = protoRoot.lookup("DataPackage").create(payload);
    let enterRoomObjBuffer = protoRoot.lookup("DataPackage").encode(enterRoomObj).finish();
    socket.send(enterRoomObjBuffer);
  };

  const Stop = () => {
    Movement(5)
  };

  const Left = () => {
    Movement(2)
  };

  const Right = () => {
    Movement(3)
  };

  const Up = () => {
    Movement(1)
  };

  const Down = () => {
    Movement(0)
  };

  const Catch = () => {
    Movement(4)
    OffControlButtons();
    OnCatchingButton();
    setIsGameRunning(false);
  };


  return (
    <Container fluid className="app-container">
      <Row className="wrapper">
        {/* Top nav area */}
        {videoReady&&<Col xs={12} lg={3} className="topView">

        </Col>}

        {/* Video / section */}
         <Col xs={12} lg={3} className="sectionView">
<div className="veido-container" >
  {!videoReady && (
    <div
      className="video-preloader"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 500,
      }}
    >
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )}

  <video
    ref={videoRef}
    autoPlay
    playsInline
    muted
    onLoadedMetadata={() => console.log("Metadata loaded")}
    onPlaying={() => setVideoReady(true)}
    onWaiting={() => setVideoReady(false)}
    src="https://ck-prod-assets.s3.ap-south-1.amazonaws.com/68a7f7335bf0675194807fc71755838429449144.mp4"
  />
</div>

        </Col>


        {/* Timer strip */}

          {videoReady&&<Col xs={12} lg={6} className="timerView">
            <div className="timerText">00:{formatTime(gameDuration) || 0.00}</div>
          </Col>}



        {/* Controls */}
        {videoReady&&<Col xs={12} lg={6} className="bottomView" style={{height:"30vh"}}>
          {/* start button */}
         {StartPlaying && (
          <div className="start-playing-button">
            <button onClick={()=>startPlayingVisible(true)} aria-label="Start Playing" />
          </div>
         )}
          {/* cache button */}
         {catching && (
         <div className="catching-button">
          <button

            style={{ backgroundImage: "url('/assets/catching.png')" }}
          />
         </div>
        )}

           {ControlButtons && (
        <div className="controls-container" >
            <div className='claw_controw'  >
            <div className="movement-grid">
          <div></div>
  <button
    className='top'
    onTouchStart={(e) => { e.preventDefault(); Up(); }}
    onTouchEnd={(e) => { e.preventDefault(); Stop(); }}
    onMouseDown={(e) => { e.preventDefault(); Up(); }}
    onMouseUp={(e) => { e.preventDefault(); Stop(); }}
  />
  <div></div>
  <button
  className='left'
    onTouchStart={(e) => { e.preventDefault(); Left(); }}
    onTouchEnd={(e) => { e.preventDefault(); Stop(); }}
    onMouseDown={(e) => { e.preventDefault(); Left(); }}
    onMouseUp={(e) => { e.preventDefault(); Stop(); }}
  />
  <div></div>
  <button
  className='right'
    onTouchStart={(e) => { e.preventDefault(); Right(); }}
    onTouchEnd={(e) => { e.preventDefault(); Stop(); }}
    onMouseDown={(e) => { e.preventDefault(); Right(); }}
    onMouseUp={(e) => { e.preventDefault(); Stop(); }}
  />
  <div></div>
  <button
  className='bottom'
    onTouchStart={(e) => { e.preventDefault(); Down(); }}
    onTouchEnd={(e) => { e.preventDefault(); Stop(); }}
    onMouseDown={(e) => { e.preventDefault(); Down(); }}
    onMouseUp={(e) => { e.preventDefault(); Stop(); }}
  />
  <div></div>

          </div>
          <div className='claw' >
               <div className="catch-button-wrapper">
            <button
              onClick={Catch}
              className="catch-button"
              style={{ backgroundImage: "url('/assets/catch.png')" }}
            />
          </div>
            </div>

            </div>


        </div>
      )}

          {/* controls ==> controlButtons & claws button*/}


        </Col>}
      </Row>
    </Container>




  );

};


//  {StartPlaying && (
//               <div className="flex justify-center items-center gap-12 p-4">
//                 <button
//                   onClick={StartQueue}
//                   style={{
//                     backgroundImage: "url('/assets/Startplaying.png')",
//                     backgroundSize: "contain",
//                     backgroundRepeat: "no-repeat",
//                     backgroundPosition: "center",
//                     width: "850px",
//                     height: "250px",
//                   }}
//                 />
//               </div>
//             )}


export default WebSocketComponent;
