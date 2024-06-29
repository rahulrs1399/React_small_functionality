import Tab from "./tabs";

export default function TestTab (){

    function RandomContant(){
        return <h1>Some random contant</h1>
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