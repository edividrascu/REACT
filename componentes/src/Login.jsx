import { useRef, useState } from 'react';
import { Welcome } from './Welcome';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '', remember: false });
  const _inputRef = useRef(null)
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    
  };
  
  const loginCompleted = formData.username.trim() === '' || formData.password.trim() === '';
  function resetForm() {
    setFormData({ username: '', password: '', remember: false });
  }
  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(formData);
  };

  console.log('Username:', formData.username);
  console.log('Password:', formData.password);
  console.log('Remember:', formData.remember);
  function handleLoginButton() {
    console.log("Login button pressed",formData)
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="age">age:</label>
        <input id="age" name="age" type="text" value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="checkbox">Remember me</label>
        <input id="checkbox" name="remember" type="checkbox" checked={formData.remember} onChange={handleChange} />
      </div>
      <button type="submit" disabled={loginCompleted} onClick={handleLoginButton}>
        Login
      </button>
      <button onClick={resetForm}>Reset</button>
      <Welcome name={formData.username} age={formData.age} />
    </form>
  );
};

export default Login;
