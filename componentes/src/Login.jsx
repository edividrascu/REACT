import { useState } from 'react';
import { Welcome } from './Welcome';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '', remember: false });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    
  };
  
  const loginCompleted = formData.username.trim() === '' || formData.password.trim() === '';
  function resetForm() {
    setFormData({ username: '', password: '', remember: false });
  }
  const handleLogin = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del envío del formulario
    onLogin(formData);
  };

  console.log('Username:', formData.username);
  console.log('Password:', formData.password);
  console.log('Remember:', formData.remember);
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="checkbox">Remember me</label>
        <input id="checkbox" name="remember" type="checkbox" checked={formData.remember} onChange={handleChange} />
      </div>
      <button type="submit" disabled={loginCompleted}>
  Login
</button>
      <button onClick={resetForm}>Reset</button>
      <Welcome name={formData.username} />
    </form>
  );
};

export default Login;
