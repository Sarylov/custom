import { Cell } from './cell';

// eslint-disable-next-line react/prop-types
export const HorizontalCellsCollection = ({ postion = 'top' }) => {
  const ids = {
    top: [5, 6, 7, 8],
    bottom: [21, 22, 23, 24],
  };
  return (
    <div className="flex flex-col items-center">
      <Cell id={ids[postion][0]} className="w-24 h-24 -mb-2" />
      <Cell id={ids[postion][1]} className="w-28 h-28" />
      <Cell id={ids[postion][2]} className="w-28 h-28 -mt-3" />
      <Cell id={ids[postion][3]} className="w-24 h-24 -mt-2" />
    </div>
  );
};
