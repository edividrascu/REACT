import  { useState } from 'react';
import { Welcome } from './Welcome';

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = () => {
    setRemember(!remember);
  };

  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Remember:', remember);

  return (
    <form >
      <div>
        <label htmlFor="username">Username:</label>
        <input id='username' type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id='password' type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label htmlFor="checkbox">Remember me</label>
          <input  id = "checkbox" type="checkbox" checked={remember} onChange={handleRememberChange} />
      </div>
    <Welcome name={username}/>
    </form>
   
  );
};
export default Login

