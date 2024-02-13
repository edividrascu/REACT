import  { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (response.status !== 200) {
          throw new Error("User not found");
        }

        const json = await response.json();
        setLoading(false);
        setData(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error;</h1>}
      {data && (
        <div>
          
          <h3>Name: {data.name}</h3>
          <p>Login: {data.login}</p>
          <img src={data.avatar_url} alt="User Avatar" style={{ width: "100px", height: "100px" }} />
        </div>
      )}
    </div>
  );
}

export default GithubUser;