import React, {useState} from 'react';

const Counter = (props) => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount( count + 1 );
      }
      
      function decrement() {
        setCount( count - 1 );
      }

    return(
        <div className="counter" style={{textAlign: 'center;' , border: '1px solid green'}}>
            <h1>{count}</h1>
            <button onClick={increment} style={{margin: '10px'}}> {props.buttons.add} </button>
            <button onClick={decrement}> {props.buttons.remove} </button>
        </div>
    )
} 

export default Counter