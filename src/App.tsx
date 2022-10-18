import React from 'react';
import './App.css';

// Components
import BoardComponent from './components/BoardComponent';

const App: React.FC = () => {
  return (
    <div className="app">
      <BoardComponent />
    </div>
  );
};

export default App;
