import { useState } from "react";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggelPopup() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div>
      <button onClick={handleToggelPopup}>
        Open Modal popup
      </button>
      {showModalPopup ? <div>Activated</div> : null}
    </div>
  );
}
