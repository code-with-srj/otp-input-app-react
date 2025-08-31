// src/OTPInput.js
import React, { useState, useRef } from "react";
import "./OTPInput.css"; // For styling (we'll create this in Step 3)

function OTPInput({ length = 4, onChangeOTP }) {
  const [otp, setOtp] = useState(Array(length).fill("")); // State to store each OTP digit
  const inputsRef = useRef([]); // Store refs for input elements to control focus

  // Focus the input at the specified index
  const focusInput = (index) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index].focus();
    }
  };

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only numeric input
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // // Focus the next input field if the current field is filled
    // if (value && index < length - 1) {
    //   focusInput(index + 1);
    // }

    // Focus the next empty input field
    for (let i = index + 1; i < otp.length; i++) {
      if (newOtp[i] === "") {
        focusInput(i);
        break;
      }
    }

    // Trigger onChangeOTP callback once OTP is fully entered
    if (newOtp.every((digit) => digit !== "")) {
      onChangeOTP(newOtp.join(""));
    }
  };

  // Handle backspace key to focus previous input if current is empty
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        focusInput(index - 1);
      }
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const digits = paste.split("").filter((char) => /\d/.test(char));

    if (digits.length === length) {
      setOtp(digits);
      onChangeOTP(digits.join(""));
    }
  };

  return (
    <div onPaste={handlePaste} className="otp-input-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputMode="numeric"
          className="otp-input"
        />
      ))}
    </div>
  );
}

export default OTPInput;
