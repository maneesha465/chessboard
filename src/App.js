import React from 'react';
import './App.css';
 import Chessboard from './components/Chessboard';
function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <header className="mb-4">
     
        <h1 >
         CHESSBOARD
        </h1>
       
      </header>
      <Chessboard/>
    </div>
  );
}

export default App;
