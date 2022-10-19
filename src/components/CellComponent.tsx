import React from 'react';
import { Cell } from '../models/Cell';

interface CellComponentProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: React.FC<CellComponentProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => click(cell)}
    >
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};

export default CellComponent;
