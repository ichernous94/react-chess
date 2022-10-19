import React from 'react';
import { Player } from '../models/Player';

interface TimerProps {
  currentPlayer: Player | null;
}

const Timer: React.FC<TimerProps> = () => {
  return <div>Timer</div>;
};

export default Timer;
