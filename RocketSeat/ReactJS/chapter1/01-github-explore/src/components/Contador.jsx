import { useState} from 'react'

export function Counter(){
    let [counter, setCounter] = useState(0)
    
    
    function Increment(){
        setCounter(counter + 1)
    }


    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>Increment</button>
        </div>
    )
}