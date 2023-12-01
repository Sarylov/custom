import { useContext } from 'react';
import whiteballGrid from '../../assets/images/grids/white-grid.png';
import whiteballGridMin from '../../assets/images/grids/white-grid_mobile.png';
import { BallConstructorContext } from '../../contexts/ball-constructor-context';
import { SquareCell } from '../../components/square-cell';
import { ConstucrotGridImage } from '../../components/constucrot-grid-image';
import { GridHints } from '../../components/grid-hints';

const WIDTH = '17.6%';
const HEIGHT = '10.4%';

export const ConstructorWhiteball = () => {
  const { changeFile, changeCropped, isRotateConstructor, files } = useContext(
    BallConstructorContext
  );
  return (
    <div
      id="constructor"
      className="container max-w-screen-sm mx-auto px-[1%] relative self-start"
    >
      {/* ячейки */}
      <>
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper="grid-ball-cell w-full"
          className="absolute top-[1.4%] left-[30.8%]"
          width={WIDTH}
          height={HEIGHT}
          preview={1}
          id={2}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[1.4%] left-[51.4%]"
          width={WIDTH}
          height={HEIGHT}
          preview={2}
          id={3}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[25.8%] left-[4%]"
          width={WIDTH}
          height={HEIGHT}
          preview={6}
          id={11}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[16.9%] left-[16.7%] rotate-[12.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={3}
          id={9}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[21.1%] left-[40%]"
          width={'20.3%'}
          height={'9.1%'}
          preview={4}
          id={6}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[25.9%] right-[3.9%]"
          width={WIDTH}
          height={HEIGHT}
          preview={7}
          id={15}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[16.9%] right-[16.7%] -rotate-[12.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={5}
          id={13}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[34.8%] left-[16.7%] -rotate-[12.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={8}
          id={12}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[31.6%] left-[40%]"
          width={'20.3%'}
          height={'9.1%'}
          preview={9}
          id={7}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[34.8%] right-[16.6%] rotate-[12.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={10}
          id={16}
        />
        {/* нижняя часть */}
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[74.3%] left-[3.6%] rotate-180"
          width={WIDTH}
          height={HEIGHT}
          preview={13}
          id={27}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[65.3%] left-[16.7%] rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={11}
          id={25}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[74.3%] right-[3.7%] rotate-180"
          width={WIDTH}
          height={HEIGHT}
          preview={14}
          id={32}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[65.3%] right-[16.6%] -rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={12}
          id={29}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[83.3%] left-[16.7%] -rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={15}
          id={28}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[80.3%] left-[39.7%] rotate-180"
          width={'20.3%'}
          height={'9.1%'}
          preview={16}
          id={23}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[83.3%] right-[16.7%] rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={17}
          id={31}
        />
      </>

      <ConstucrotGridImage
        largeImagePath={whiteballGrid}
        minImagePath={whiteballGridMin}
      />

      {/* подсказки */}
      <GridHints
        isRotateConstructor={isRotateConstructor}
        cellIds={[2, 3, 9, 6,7,13, 11, 12,15, 16, 25, 23, 29, 28, 31, 27,32].filter(
          (cellId) => !files[cellId]
        )}
      />
    </div>
  );
};
