import { useState} from 'react'

//imutabilidade -  não altera o estado da variavel, e sempre vai receber um novo valor
// no react para adicionar um valor nós criamos um nova variavel e adicionamos no final.




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