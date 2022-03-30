import React, {useContext} from 'react';
import './toggle.css';
import Sun from '../../assets/icons/moon.png';
import Moon from '../../assets/icons/sun1.png';
import { ThemeContext } from '../../context';

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"});
    }

    return (
        <div className='t'>
            <img src={Moon} alt=""  className='t-icon' />
            <img src={Sun} alt="" className='t-icon' />
            
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    );
}

export default Toggle;
