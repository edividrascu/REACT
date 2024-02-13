import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      <h3>Github User Details</h3>
      
      <GithubUser username={username} />
    </div>
  );
};

export default ShowGithubUser;
