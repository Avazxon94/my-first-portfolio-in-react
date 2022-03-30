import React, {useState} from "react";

const Inputs = () => {
    const [value, setValue] = useState('');

    function send() {
        document.querySelector('.sent');
        document.querySelector('.set-input').textContent = (value);
        // console.log(value);
        document.querySelector('.s').value='';
      }
    return(
        <div className='input__block'>
        
        <input className='s'
          type='' 
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button className='sent' onClick={send}>Send</button>
        <div className='set-input'>{send}</div>
      </div>
    )
}

export default Inputs;

