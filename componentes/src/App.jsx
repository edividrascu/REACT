
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUsers from './GithubUsers';
import ShowGithubUser from './ShowGithubUser';
import Nav from './Nav';
import GithubUserList from './GithubUserList'; // Import the new component
const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>La página que estás buscando no existe.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome name="EDDY" />} />
          <Route path="/counter" element={<Counter valorIni={1} valorDeAumento={10} />} />
          <Route path="/users" element={<GithubUsers />} />
          
          <Route path="/users" element={<GithubUserList />} />
          
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
