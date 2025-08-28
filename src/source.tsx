import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Confetti from "react-confetti";

Modal.setAppElement("#root"); // accessibility

const WinPopup = ({ isOpen, onClose, ResetForPlay }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isOpen && <Confetti width={windowSize.width} height={windowSize.height} />}
      
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-4 flex flex-col items-center animate-scale-up"
      >
        <img
          src="/assets/WinPopUp.png"
          alt="Win Popup"
          className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
        />

        <button
          onClick={()=>ResetForPlay(true)}
          className="mt-4 sm:mt-6 hover:scale-105 transition-transform"
        >
          <img
            src="/assets/claim_button.png"
            alt="Claim Button"
            className="w-36 sm:w-40 md:w-48"
          />
        </button>
      </Modal>
    </>
  );
};

export default WinPopup;

