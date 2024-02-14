import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

function GithubUserList() {

    const [data,setData] = useState([])
  
    useEffect(()=>{
      fetch(`https://api.github.com/users`)
      .then(response=>{
          return response.json()
      })
      .then(json=>{
        
        setData(json)
      })
      .catch(error=>{
        console.log(error)
      })
    },[])

  return (

    <div className="github-users"> 
        <h2>Github users</h2>
        <ul>
            {data.map((user)=>{

                return(
                <li key={user.id}>
                    <Link to={`/users/${user.login}`}>{user.login}</Link> 
                </li>)
            })}
        </ul>
        <hr />
        <Outlet/>
    </div>

    )

}

export default GithubUserList