import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUsers from './GithubUsers';
import Nav from './Nav';
import GithubUserList from './GithubUserList';
import MyFormComponent from './MyFormComponent';
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
          
          <Route index element={<p>Agregar un usuario y seleccionarlo</p>} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path='/MyForm' element={<MyFormComponent />} />
          <Route path="/users" element={<GithubUserList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;