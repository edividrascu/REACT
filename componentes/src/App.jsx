import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUsers from './GithubUsers';
import ShowGithubUser from './ShowGithubUser';
import Nav from './Nav';

const App = () => {
  return (
    <Router>
      <div>
        {/* los 3 links pero atravez de un componente */}
        <Nav/>

        <Routes>
          <Route path="/" element={<Welcome name="EDDY" />} />
          <Route path="/counter" element={<Counter valorIni={1} valorDeAumento={10} />} />
          <Route path="/users" element={<GithubUsers />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
