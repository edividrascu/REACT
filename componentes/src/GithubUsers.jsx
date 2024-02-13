import { useState } from 'react';
import GithubUser from './GithubUser';  

const GithubUsers = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${inputValue}`);

      if (response.status !== 200) {
        throw new Error("User not found");
      }

      const user = await response.json();

      
      setUsers((prevUsers) => [...prevUsers, user]);
      setSearchClicked(true);
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div>
      <h2>FETCH GITHUB</h2>
      <p>Buscar usuarios</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Usuario:"
      />
      <button type='button' onClick={handleSearch}>Buscar</button>
      <div>
        {/* Mapea el array de usuarios para renderizar los componentes GithubUser */}
        {searchClicked && users.map((user, index) => <GithubUser key={index} username={user.login} />)}
      </div>
    </div>
  );
};

export default GithubUsers;
