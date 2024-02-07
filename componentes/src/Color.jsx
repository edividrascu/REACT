// Cree un componente llamado Color que reciba un 
// objeto llamado 'color' como prop
function Color({color}) {
    return (    
      <li>{color.name}</li>
    )
  }
  
  export default Color