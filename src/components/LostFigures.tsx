import React from 'react';
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: React.FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost__figure">
      <h3 style={{textAlign: 'center'}}>{title}</h3>
      {figures.map((figure) => (
        <div className='figure__text' key={figure.id}>
          {figure.logo && (
            <img width={20} height={20} src={figure.logo} alt="figure" />
          )}
          {figure.name}{' '}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
