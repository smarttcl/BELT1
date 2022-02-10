import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
