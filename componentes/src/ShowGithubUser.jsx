import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
        console.error(`Error fetching GitHub user ${username}:`, error);
      }
    };

    fetchUser();
  }, [username]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.login}</h2>
      <p>Name: {user.name}</p>
      <img src={user.avatar_url} alt="User Avatar" style={{ width: "100px", height: "100px" }} />
      <br />
      <Link to="/users"><strong color='red'>Back</strong></Link>
      
    </div>
  );
};

export default ShowGithubUser;