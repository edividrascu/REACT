import { useState } from "react"

function Counter({valorIni ,valorDeAuento}) {
    let [counter,setCounter] = useState(valorIni)
    
  return (
    <>
    <h2>{counter}</h2>
    <button onClick={()=>{
        setCounter(counter+valorDeAuento)
    }}>por {valorDeAuento}</button>
    </>
  )
}

export default Counter