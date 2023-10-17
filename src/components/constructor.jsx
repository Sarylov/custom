import { HorizontalCellsCollection } from './horizontal-cells-collection';
import { LeftCellsCollection } from './left-cells-collection';
import { RightCellsCollection } from './right-cells-collection';
import { VerticalCellsCollection } from './vertical-cells-collection';

export const Constructor = () => {
  return (
    <div className="constructor flex flex-col items-center" id="constructor">
      <VerticalCellsCollection />
      <div className="flex items-center -mt-6">
        <LeftCellsCollection className="-mr-6" />
        <HorizontalCellsCollection />
        <RightCellsCollection className="-ml-6" />
      </div>
      <VerticalCellsCollection postion="bottom" className="-mt-6" />
      <div className="flex items-center -mt-6">
        <LeftCellsCollection postion="bottom" className="-mr-6" />
        <HorizontalCellsCollection postion="bottom" />
        <RightCellsCollection postion="bottom" className="-ml-6" />
      </div>
    </div>
  );
};
