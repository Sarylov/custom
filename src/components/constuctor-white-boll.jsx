import { SquareCell } from './square-cell';
import whiteBollGrid from '../assets/white_boll/white_boll.png';

export const ConstuctorWhiteBoll = () => {
  return (
    <div id="constructor" className="container max-w-screen-sm mx-auto px-4 relative self-start">
      <div className="absolute w-full h-full -left-0">
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[1.2%] left-[28.4%]"
          width="21.7%"
          id={1}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[1.2%] right-[27.6%]"
          width="21.7%"
          id={2}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[25.5%] left-[2.9%]"
          width="21.7%"
          id={6}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[16%] left-[16.5%] rotate-[11.4deg]"
          width="21.7%"
          id={3}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[20%] left-[39.5%]"
          width="21.7%"
          id={4}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[25.5%] right-[2.5%]"
          width="21.7%"
          id={7}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[16%] right-[15.7%] -rotate-[11.4deg]"
          width="21.7%"
          id={5}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[35%] left-[16.5%] -rotate-[11.4deg]"
          width="21.7%"
          id={8}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[30.7%] left-[39.5%]"
          width="21.7%"
          id={9}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[35%] right-[15.7%] rotate-[11.4deg]"
          width="21.7%"
          id={10}
        />
        {/* нижняя часть */}
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[73.7%] left-[2.9%] rotate-180"
          width="21.7%"
          id={13}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[64.2%] left-[16.5%] rotate-[191.4deg]"
          width="21.7%"
          id={11}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[73.7%] right-[2.5%] rotate-180"
          width="21.7%"
          id={14}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[64.2%] right-[15.7%] -rotate-[191.4deg]"
          width="21.7%"
          id={12}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[83.3%] left-[16.5%] -rotate-[191.4deg]"
          width="21.7%"
          id={15}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[78.9%] left-[39.5%] rotate-180"
          width="21.7%"
          id={16}
        />
        <SquareCell
          classNameWrapper=" grid-boll-cell w-full"
          className="absolute top-[83.2%] right-[15.7%] rotate-[191.4deg]"
          width="21.7%"
          id={17}
        />
      </div>

      <img
        src={whiteBollGrid}
        alt="grid_white_boll"
        className="w-full relative grid-boll"
      />
    </div>
  );
};
