
import './style.css';
import useLocalStorage from './useLocalStorage';

export default function DarkLighMode(){

    const [theme, setTheme] = useLocalStorage("theme", "dark")

    function handleToggelTheme () {
        setTheme(theme === 'lighr' ? 'dark' : 'light')
    }

    return (
    <div className="light-dark-theme" dark-theme={theme}> 
        <div>
            <p>Hey there!</p>
            <button onClick={handleToggelTheme}>Dark Mode</button>
        </div>
    </div>
    )
}