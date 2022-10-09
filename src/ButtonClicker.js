import {useState} from 'react';

function ButtonClicker() {

    const [count, setCount] = useState(0);
    
    const rea = () => {
       setCount(count+1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={rea}>click</button>
        </div>
    )
}


export default ButtonClicker;