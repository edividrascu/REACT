import { useEffect, useRef } from "react"

function FocusableInput() {
    const _inputRef = useRef(null)
    console.log(_inputRef)
    useEffect(()=>{
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