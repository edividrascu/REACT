
export default function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.target.name) //ouch
        // imprime el "ouch" pasado como name
    }

    function handleimageClick(event) {
		event.stopPropagation();
		console.log(event.target.alt)	
	}

    return (
        <button name= "ouch" onClick={handleButtonClick}>
                <img onClick={handleimageClick} src="fist.png" alt="Img" width={23} height={23}/>
                Click me!
            </button>
      )
}
