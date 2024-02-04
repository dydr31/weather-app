import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Loading.scss'

const Loading = () => {
    const { theme } = useContext(ThemeContext);
    return <div className={`${"load"} ${theme}`}></div>
}

export default Loading