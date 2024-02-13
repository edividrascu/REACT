import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowGithubUser = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
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