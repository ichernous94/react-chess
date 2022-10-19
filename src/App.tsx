import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';

// Classes
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

const App: React.FC = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer); // first move white side
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Black Figure" figures={board.lostBlackFigures} />
        <LostFigures title="White Figure" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
};

export default App;
