import { MdPadding } from "react-icons/md";

export default function Suggestions({ data, handleClick }) {
  return (
    <div style={{marginTop:'-16px', paddingRight:"40px", textdecoration:'none'}}>
    <ul style={{ textdecoration: "none" }}>
      {data && data.length
        ? data.map((item, index) => (
            <li
              style={{
                textdecoration: "none",
                cursor: "pointer",
                border: "1px solid black",
                margin: '3px'
              }}
              onClick={handleClick}
              key={index}
            >
              {item}
            </li>
          ))
        : null}
    </ul>
    </div>
  );
}
