// src/App.js
import React, { useState } from "react";
import OTPInput from "./Components/OTPInput"; // Import OTPInput
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");

  // Handle OTP change
  const handleOTPChange = (otp) => {
    setOtp(otp);
    console.log("Entered OTP:", otp); // You can use this OTP for further validation
  };

  return (
    <div className="App">
      <h2>Enter OTP</h2>
      <OTPInput length={4} onChangeOTP={handleOTPChange} />
      <p>Entered OTP: {otp}</p>
    </div>
  );
}

export default App;
