/* eslint-disable react/prop-types */
import { Cell } from './cell';

export const VerticalCellsCollection = ({
  postion = 'top',
  className = '',
}) => {
  const ids = {
    top: [1, 2, 3, 4],
    bottom: [17, 18, 19, 20],
  };
  return (
    <div className={`flex items-center ${className}`}>
      <Cell id={ids[postion][0]} className="w-24 h-24 -mr-2" />
      <Cell id={ids[postion][1]} className="w-28 h-28" />
      <Cell id={ids[postion][2]} className="w-28 h-28 -ml-3" />
      <Cell id={ids[postion][3]} className="w-24 h-24 -ml-2" />
    </div>
  );
};
