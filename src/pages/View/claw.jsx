import React from 'react'
import "../../css/claw.css"

const Claw = () => {
  return (
    <div className="containerSection">
      <div className="nav_section"></div>

      <div className="veidosection">
        <video
          autoPlay
          playsInline
          muted
          src="https://ck-prod-assets.s3.ap-south-1.amazonaws.com/68a7f7335bf0675194807fc71755838429449144.mp4"
        />

        {/* Timer wrapper */}
        <div className="timer-wrapper">
          <img className="timer-bg" src="/assets/TimeHolder.png" alt="Timer Holder"/>
          <span className="timer-text">00.00</span>
        </div>
      </div>

      <div className="controlsection">
        <div className="control_button"></div>
        <div className="claw_control"></div>
      </div>
    </div>
  )
}

export default Claw
