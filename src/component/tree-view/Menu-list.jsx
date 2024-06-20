import './style.css'

import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {


  return (
    <ul className="">
      {list && list.length ? (
        list.map((listItem) => 
          <MenuItem item = {listItem} />
        )
      ) : (
        <p>Data Not Found!</p>
      )}
    </ul>
  );
}
