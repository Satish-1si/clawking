// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // React Router
// import { PlayFill } from "react-bootstrap-icons";
// import "../css/Game.css";
import ClawKing  from "./View/wensocket.jsx"
const Game = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Set timer to navigate back after 10 minutes (600000 ms)
  //   const timer = setTimeout(() => {
  //     navigate(-1); // Go back to previous page
  //   }, 3000);

  //   // Cleanup timer if component unmounts
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (


            <ClawKing/>

  );
};

export default Game;


// import Message from "./Message"
// //  import WebSocketComponent from "./View/wensocket"
//  import Box from "./View/Box.jsx"
// const WebSocketComponent = lazy(() => import("./View/wensocket"));

// function App() {
//   return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-200">
//       <Suspense fallback={<div className="text-lg text-gray-600">Loading game...</div>}>
//         <WebSocketComponent />
//       </Suspense>
//     </div>
//   )
// }
// export default App
