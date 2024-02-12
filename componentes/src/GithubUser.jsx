
import useGithubUserForm from "./useGithubUserForm";

function GithubUser({ username }) {
  const { data, loading, error } = useGithubUserForm(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
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

