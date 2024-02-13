import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowGithubUser = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    fetch(`https://api.github.com/users/`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>Detalles de Usuario de GitHub</h2>
      <p>Nombre de usuario: {user.login}</p>
      
    </div>
  );
};

export default ShowGithubUser;