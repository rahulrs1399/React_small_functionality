import { useState } from "react";
import QRCode from "react-qr-code";
import './style.css'

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="Container">
      <h1>QR Code Generator</h1>
      <div className="search-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          name="qr-code"
          placeholder="Enter you name"
        />
        <button onClick={handleGenerateQRCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
