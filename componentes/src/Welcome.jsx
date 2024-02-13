
import { Link } from 'react-router-dom';
import Age from './Age';

export function Welcome({ name = 'alguien' }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      <Age age={20}/>
      <p>Happy coding!</p>
      <Link to="/counter">Go to counter</Link>
      <br />
      <Link to="/users">Go to users</Link>
    </div>
  );
}

export default Welcome;
