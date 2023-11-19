import { useContext, useLayoutEffect, useRef, useState } from 'react';
import RedBallGrid from '../../assets/red_ball/grid.png';
import Background from '../../assets/red_ball/black.png';
import { BallConstructorContext } from '../../contexts/ball-constructor-context';
import { SquareCell } from '../../components/square-cell';
import { Modal } from '../../components/modal';
import { PrintForm } from '../../components/print-form';

const WIDTH = '17.6%';
const HEIGHT = '10.4%';

export const ConstructorRedBall = () => {
  const [fullName, setFullName] = useState('Иван Иванов');
  const [number, setNumber] = useState(7);
  const refComponent = useRef(null);
  const [widthComponent, setWidthComponent] = useState(0);

  const numberStyles =
    String(number).length > 1
      ? {
          fontSize: (widthComponent / 100) * 12,
          top: '11%',
        }
      : {
          fontSize: (widthComponent / 100) * 17,
          top: '10%',
        };

  const nameParts = fullName.trim().split(' ');
  const nameLen = nameParts.length;
  const maxLenPart = nameParts.reduce(
    (max, part) => (max < part.length ? part.length : max),
    0
  );

  const getWidth = (maxSimbols, defaultSize, reduceBy) =>
    (widthComponent / 100) *
    (maxLenPart < maxSimbols
      ? defaultSize
      : defaultSize - maxLenPart * reduceBy);

  const nameStyles =
    (nameLen === 1 && {
      fontSize: getWidth(6, 8, 0.2),
      top: '4.8%',
    }) ||
    (nameLen === 2 && {
      fontSize: getWidth(12, 6, 0.12),
      top: `${maxLenPart < 12 ? 4 : 4 + maxLenPart * 0.05}%`,
      lineHeight: '82%',
    }) ||
    (nameLen === 3 && {
      fontSize: getWidth(14, 4, 0.07),
      top: `${maxLenPart < 14 ? 4.5 : 4.5 + maxLenPart * 0.02}%`,
      lineHeight: '82%',
    });

  useLayoutEffect(() => {
    function handleResize() {
      setWidthComponent((prevWidth) => {
        if (refComponent.current.offsetWidth === prevWidth) return prevWidth;
        return refComponent.current.offsetWidth;
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { changeFile, changeCropped } = useContext(BallConstructorContext);
  return (
    <div
      id="constructor"
      ref={refComponent}
      className="container max-w-screen-sm mx-auto px-[1%] relative self-start"
    >
      {/* редактируемые прямоугольники */}
      <>
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
          className="absolute top-[65.3%] left-[16.7%] rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          id={11}
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
          className="absolute top-[83.3%] right-[16.7%] rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          id={17}
        />
      </>
      {/* надписи */}
      <>
        <pre
          className="font-bold w-[98%] text-center absolute z-30 text-white leading-9 uppercase font-custom"
          style={nameStyles}
        >
          {fullName.trim().split(' ').join('\n')}
        </pre>
        <p
          className="font-bold  text-center absolute z-30 text-white font-custom inline-block left-[50%] -translate-x-[50%]"
          style={numberStyles}
        >
          {number}
        </p>
        <Modal
          title="Введите данные"
          name={'black-ball'}
          content={
            <PrintForm state={{ fullName, setFullName, number, setNumber }} />
          }
        >
          <div
            className="absolute left-1/2 w-[50%] top-[2%] z-30 -translate-x-[50%]  cursor-pointer "
            style={{ height: '14%' }}
          ></div>
        </Modal>
      </>
      <img
        src={Background}
        alt="Background"
        className="w-full grid-ball left-0 top-0 px-[1%] absolute z-30"
      />
      {/* фото на несколько ячеек */}
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[20.4%] left-[50%] opacity-70  -translate-x-[50%] z-20 "
        width={'26.2%'}
        height={'30.5%'}
        id={678}
        // isTransparentBackground
        cropAspect={1 / 2.5}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[68.8%] left-[50%] opacity-70  -translate-x-[50%] z-20 rotate-180 "
        width={'26.2%'}
        height={'31%'}
        id={16}
        // isTransparentBackground
        cropAspect={1 / 2.5}
      />
      <img
        onLoad={() => {
          setWidthComponent(refComponent.current.offsetWidth);
        }}
        src={RedBallGrid}
        alt="grid_white_ball"
        className="w-full relative grid-ball"
      />
    </div>
  );
};
