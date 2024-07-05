import './modal.css'

export default function Modal({ id, header, body, footer, OnClose }) {


  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <h2 className="header">
          <span>
          {header ? header : "Header"}
          </span>
          <span onClick={OnClose} className="close-modal-icon">&times;</span>
        </h2>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Modal body container</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <p>Modal Footer container</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
