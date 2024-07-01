import Tab from "./tabs";
import './tab.css'

export default function TestTab (){

    function RandomContant(){
        return <h1 
        style={{fontSize:'50px',color:'red'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem fugit incidunt sint deserunt tenetur quasi, maxime vero impedit est quae mollitia ut ea unde dicta repellendus eius, earum fuga corporis.</h1>
    }

    const tabs = [
        {
            label : 'Tab 1',
            contant : <div>This is contant for Tab 1</div>
        },
        {
            label : 'Tab 2',
            contant : <div>This is contant for Tab 2</div>
        },
        {
            label : 'Tab 3',
            contant : <RandomContant />
        },

    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)
    }

    return <Tab tabsContant={tabs} onChange={handleChange} />
}