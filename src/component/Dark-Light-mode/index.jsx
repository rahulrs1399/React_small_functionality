
import './style.css';
import useLocalStorage from './useLocalStorage';

export default function DarkLighMode(){

    const [theme, setTheme] = useLocalStorage("theme", "dark")
  
    function handleToggelTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    console.log(theme)
    
    return (
    <div className="light-dark-mode" dark-theme={theme}> 
        <div className='containers'>
            <p>Hey there!</p>
            <button className='toggel-button' onClick={() => handleToggelTheme()}>Dark Mode</button>
        </div>
    </div>
    )
}