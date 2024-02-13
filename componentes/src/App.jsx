
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';  


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="EDDY" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;