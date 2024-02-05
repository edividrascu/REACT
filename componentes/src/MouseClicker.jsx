
export default function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.target.name) //ouch
        // imprime el "ouch" pasado como name
    }
  return (
    <button name="ouch"className="boton" onClick={handleButtonClick}>Pegame</button>
  )
}
