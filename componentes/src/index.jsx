import App from "./App";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

