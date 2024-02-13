import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';  
import Counter from './Counter';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="EDDY" />} />
      <Route path="/counter" element={<Counter valorIni={0} valorDeAumento={10}/>} />
    </Routes>
  );
};

export default App;
