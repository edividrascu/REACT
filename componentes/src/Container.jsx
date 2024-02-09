import { useState } from "react"
import "./index.css"
function Container({title,children}) {
    const [collapsed, setCollapsed] = useState(false)
    function handleToggleCollapsed() {
        setCollapsed(t=>!t)
    }
  return (
    <div className="App">
        <div className="App-title">{title} <button className="boton-toggle" onClick={handleToggleCollapsed}>Despliegame! </button></div>
        {collapsed && <div className="App-content">{children}</div>}
    </div>
  )
}

export default Container