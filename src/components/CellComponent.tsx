import React from 'react';
import { Cell } from './models/Cell';

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: React.FC<CellComponentProps> = ({ cell }) => {
  return <div className={['cell', cell.color].join(' ')}></div>;
};

export default CellComponent;
