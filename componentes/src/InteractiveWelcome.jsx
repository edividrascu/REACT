import { useState } from "react"
import { Welcome } from "./Welcome"

export default function InteractiveWelcome() {
    const [username,setUsername] = useState("")
    function handleUserNameInputChange(event) {
        const value=event.target.value
        setUsername(value)
        
    }
    console.log(username)
  return (
    <div>
        <input value={username} onChange={handleUserNameInputChange}  />
        <Welcome name={username}/>
    </div>
  )
}
