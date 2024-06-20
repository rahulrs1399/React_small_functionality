import './style.css'
import React, {useState} from 'react'
import MenuList from './Menu-list'

const MenuItem = ({item}) => {

    const [displayCurrentChildrens, setDisplayCurrentChildrens] = useState({});
    // const [expandButton, setExpandButton] = useState(true);

    function handleToggelChildren(getCurrentChidrens){
        setDisplayCurrentChildrens({
            ...displayCurrentChildrens, 
            [getCurrentChidrens] : !displayCurrentChildrens[getCurrentChidrens],
        })
    }

    // console.log(displayCurrentChildrens);

    // function toggel(){
    //     return displayCurrentChildrens ? '+' : '-';
    // }

  return (
    <div>
        <li>
            <div className='menu-item'>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length 
                    ? <span onClick={() => handleToggelChildren(item.label)}>{
                        displayCurrentChildrens[item.label]  ? '-' : '+'
                    }</span>
                    : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildrens[item.label] 
                ? <MenuList list={item.children} />
                : null 
            }
        </li>
    </div>
  )
}

export default MenuItem