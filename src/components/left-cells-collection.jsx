import { Cell } from './cell';

// eslint-disable-next-line react/prop-types
export const LeftCellsCollection = ({ postion = 'top', className = '' }) => {
  const ids = {
    top: [9, 12, 10, 11],
    bottom: [25, 28, 26, 27],
  };
  return (
    <div className={className}>
      <Cell
        id={ids[postion][0]}
        className="w-28 h-28"
        classNameWrapper="flex flex-1 justify-center rotate-[11deg] -mb-6 -mr-8"
      />
      <div className="flex items-center justify-center">
        <Cell
          id={ids[postion][1]}
          className="w-28 h-28 "
          classNameWrapper="w-28 h-28 -mr-2"
        />
        <Cell
          id={ids[postion][2]}
          className="w-24 h-24"
          classNameWrapper="w-24 h-24"
        />
      </div>
      <Cell
        id={ids[postion][3]}
        className="w-28 h-28"
        classNameWrapper="flex flex-1 justify-center -rotate-[11deg] -mt-6 -mr-8"
      />
    </div>
  );
};
