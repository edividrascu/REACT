import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUsers from './GithubUsers';
import Nav from './Nav';
import MyFormComponent from './MyFormComponent';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';
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
          <Route path="/githubUsers" element={<GithubUsers />} />
          <Route index element={<p>Agregar un usuario y seleccionarlo</p>} />
          <Route path="*" element={<NotFound />} />
          <Route path='/MyForm' element={<MyFormComponent />} />
          <Route path="/users" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;