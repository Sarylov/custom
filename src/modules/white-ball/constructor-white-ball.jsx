import { useContext } from 'react';
import whiteballGrid from '../../assets/white_ball/white_ball.png';
import { BallConstructorContext } from '../../contexts/ball-constructor-context';
import { SquareCell } from '../../components/square-cell';

const WIDTH = '17.6%';
const HEIGHT = '10.4%';

export const ConstructorWhiteball = () => {
  const { changeFile, changeCropped } = useContext(BallConstructorContext);
  return (
    <div
      id="constructor"
      className="container max-w-screen-sm mx-auto px-[1%] relative self-start"
    >
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper="grid-ball-cell w-full"
        className="absolute top-[1.4%] left-[30.8%]"
        width={WIDTH}
        height={HEIGHT}
        id={1}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[1.4%] left-[51.4%]"
        width={WIDTH}
        height={HEIGHT}
        id={2}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[25.8%] left-[4%]"
        width={WIDTH}
        height={HEIGHT}
        id={6}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[16.9%] left-[16.7%] rotate-[12.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={3}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[21.1%] left-[40%]"
        width={'20.3%'}
        height={'9.1%'}
        id={4}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[25.9%] right-[3.9%]"
        width={WIDTH}
        height={HEIGHT}
        id={7}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[16.9%] right-[16.7%] -rotate-[12.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={5}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[34.8%] left-[16.7%] -rotate-[12.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={8}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[31.6%] left-[40%]"
        width={'20.3%'}
        height={'9.1%'}
        id={9}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[34.8%] right-[16.6%] rotate-[12.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={10}
      />
      {/* нижняя часть */}
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[74.3%] left-[3.6%] rotate-180"
        width={WIDTH}
        height={HEIGHT}
        id={13}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[65.3%] left-[16.7%] rotate-[192.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={11}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[74.3%] right-[3.7%] rotate-180"
        width={WIDTH}
        height={HEIGHT}
        id={14}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[65.3%] right-[16.6%] -rotate-[192.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={12}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[83.3%] left-[16.7%] -rotate-[192.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={15}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[80.3%] left-[39.7%] rotate-180"
        width={'20.3%'}
        height={'9.1%'}
        id={16}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[83.3%] right-[16.7%] rotate-[192.3deg]"
        width={WIDTH}
        height={HEIGHT}
        id={17}
      />

      <img
        src={whiteballGrid}
        alt="grid_white_ball"
        className="w-full relative grid-ball"
      />
    </div>
  );
};
