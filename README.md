# OTP Input App React

A simple React application for entering and validating OTP (One-Time Password) codes.

## Features

- Custom OTP input component with configurable length
- Numeric-only input fields
- Auto-focus to next input on entry
- Paste support for full OTP
- Visual feedback for focus and invalid input

## Getting Started

### Installation

Clone the repository and install dependencies:

```sh
npm install
```

### Running the App

Start the development server:

```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

The main OTP input logic is implemented in [`src/Components/OTPInput.js`](src/Components/OTPInput.js).  
It is used in [`src/App.js`](src/App.js) as follows:

```js
import OTPInput from "./Components/OTPInput";

<OTPInput length={4} onChangeOTP={handleOTPChange} />
```

- `length`: Number of OTP digits (default is 4)
- `onChangeOTP`: Callback function called when OTP is fully entered

## File Structure

```
otp-input-app/
├── public/
├── src/
│   ├── App.js
│   ├── Components/
│   │   ├── OTPInput.js
│   │   └── OTPInput.css
│   └── ...
├── package.json
└── README.md
```

## Customization

- Change OTP length by modifying the `length` prop in [`App.js`](src/App.js).
- Style the input fields via [`OTPInput.css`](src/Components/OTPInput.css).

## License

This project is licensed under the MIT
