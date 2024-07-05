import { useState } from "react";
import Modal from "./modal";
import './modal.css'

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggelPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function OnClose(){
    setShowModalPopup(false);
  }

  return (
    <div className="button-container">
      <button onClick={handleToggelPopup} className="modal-button">Open Modal popup</button>
      {showModalPopup && <Modal body={<div>Custom body Modal</div>} OnClose={OnClose}/>}
    </div>
  );
}
