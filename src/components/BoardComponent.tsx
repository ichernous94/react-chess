import React from 'react';

const BoardComponent: React.FC = () => {
  return (
    <div className="board">
      <div className="cell white"></div>
      <div className="cell black"></div>
      <div className="cell white"></div>
      <div className="cell black"></div>
    </div>
  );
};

export default BoardComponent;
