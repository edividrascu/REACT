import { useEffect, useRef } from "react"

function FocusableInput() {
    const _inputRef = useRef(null)
    const mountedRef = useRef(false)
    console.log(_inputRef)
    useEffect(()=>{
        if (!mountedRef.current) {
            mountedRef.current = true 
            console.log("Montado por primera vez")
        }else{
            console.log("Montado de nuevo para el debug propouse")
        }
     _inputRef.current?.focus()
    
    },[])
  return (
    <form action="">
        <label >
            AUTOFOCUSABLE:  
            <input ref={_inputRef} type="text" placeholder="AUTOFOCUSABLE"/>
        </label>
    </form>
  )
}

export default FocusableInput