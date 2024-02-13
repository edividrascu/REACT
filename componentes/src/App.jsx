import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUsers from './GithubUsers';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="EDDY" />} />
        <Route path="/counter" element={<Counter valorIni={1} valorDeAumento={10} />} />
        <Route path="/users" element={<GithubUsers />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
};

export default App;
