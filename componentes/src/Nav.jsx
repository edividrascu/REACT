import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">Github Users</Link>
            </li>
            <li>
              <Link to="/notFound">Not Found</Link>
            </li>
          </ul>
        </nav>
  )
}

export default Nav