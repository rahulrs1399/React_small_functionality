import React, {useState} from 'react'
import MenuList from './Menu-list'

const MenuItem = ({item}) => {

    const [displayCurrentChildrens, setDisplayCurrentChildrens] = useState({});

    function handleToggelChildren(getCurrentChidrens){
        setDisplayCurrentChildrens({
            ...displayCurrentChildrens, 
            [getCurrentChidrens] : !displayCurrentChildrens[getCurrentChidrens],
        })
    }

  return (
    <div>
        <li>
            <div>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length 
                    ? <span onClick={() => handleToggelChildren(item.label)}>+</span>
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