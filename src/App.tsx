import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import BoardComponent from './components/BoardComponent';

// Classes
import { Board } from './components/models/Board';

const App: React.FC = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  };

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
