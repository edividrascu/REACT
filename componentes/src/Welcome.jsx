
import Age from './Age';

export function Welcome({ name = 'alguien' }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      <Age age={20}/>
      <p>Happy coding!</p>
    </div>
  );
}

export default Welcome;
