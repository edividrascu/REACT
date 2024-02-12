import { useState } from 'react';
import { GithubUser } from './GithubUser';

const GithubUsers = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked(true);
    
  };

  return (
    <div>
          <h2>FETCH GITHUB</h2>
          <p>Buscar usuarios</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="usuario:"
      />
      <button type='button' onClick={handleSearch}>Buscar</button>
      <div>
        {searchClicked && <GithubUser username={inputValue} />}
      </div>
    </div>
  );
};

export default GithubUsers;
