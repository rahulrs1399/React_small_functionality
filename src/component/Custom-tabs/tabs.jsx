import { useState } from "react"

export default function Tab({tabsContant, onChange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
    <div className="wrraper">
        <div className="heading">
            {tabsContant.map((tabItem, index) => (
                <div onClick={() => handleOnClick(index)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                </div>
            ))}
        </div>
        <div className="contant">
            {tabsContant[currentTabIndex] && tabsContant[currentTabIndex].contant}
        </div>
    </div>
    )
}