import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import RedBallGrid from '../../assets/red_ball/grid.png';
import Background from '../../assets/red_ball/black.png';
import { BallConstructorContext } from '../../contexts/ball-constructor-context';
import { SquareCell } from '../../components/square-cell';
import { Modal } from '../../components/modal';
import { PrintForm } from '../../components/print-form';
import playerImage from '../../assets/images/player.png';

const WIDTH = '17.6%';
const HEIGHT = '10.4%';

export const ConstructorRedBall = () => {
  const { fullName, setFullName, number, setNumber } = useContext(
    BallConstructorContext
  );
  const refComponent = useRef(null);
  const [widthComponent, setWidthComponent] = useState(0);

  useEffect(() => {
    setFullName('Имя фамилия');
    setNumber(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const numberStyles =
    number !== undefined
      ? String(number)?.length > 1
        ? {
            fontSize: (widthComponent / 100) * 12,
            top: '11.5%',
          }
        : {
            fontSize: (widthComponent / 100) * 15,
            top: '10.5%',
          }
      : {};

  const nameParts = fullName?.trim()?.split(' ');
  const nameLen = nameParts?.length;
  const maxLenPart = nameParts?.reduce(
    (max, part) => (max < part?.length ? part?.length : max),
    0
  );

  const getWidth = (maxSimbols, defaultSize, reduceBy) =>
    (widthComponent / 100) *
    (maxLenPart < maxSimbols
      ? defaultSize
      : defaultSize - maxLenPart * reduceBy);

  const nameStyles = fullName
    ? (nameLen === 1 && {
        fontSize: getWidth(6, 8, 0.3),
        top: '4.8%',
      }) ||
      (nameLen === 2 && {
        fontSize: getWidth(8, 7, 0.24),
        top: `${maxLenPart < 8 ? 4 : 4 + maxLenPart * 0.08}%`,
        lineHeight: '82%',
      }) ||
      (nameLen === 3 && {
        fontSize: getWidth(13, 4, 0.07),
        top: `${maxLenPart < 13 ? 4.3 : 4.3 + maxLenPart * 0.03}%`,
        lineHeight: '82%',
      })
    : {};

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
          preview={1}
          id={9}
        />

        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[16.9%] right-[16.7%] -rotate-[12.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={2}
          id={13}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[34.8%] left-[16.7%] -rotate-[12.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={3}
          id={12}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[34.8%] right-[16.6%] rotate-[12.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={4}
          id={16}
        />
        {/* нижняя часть */}
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[65.3%] left-[16.7%] rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={5}
          id={25}
        />

        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[65.3%] right-[16.6%] -rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={6}
          id={29}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[83.3%] left-[16.7%] -rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={7}
          id={28}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[83.3%] right-[16.7%] rotate-[192.3deg]"
          width={WIDTH}
          height={HEIGHT}
          preview={8}
          id={31}
        />
      </>
      {/* надписи */}
      <>
        <pre
          className="font-bold w-[98%] text-center absolute z-30 text-white leading-9 uppercase font-custom stroke"
          style={nameStyles}
        >
          {fullName && fullName.trim().split(' ').join('\n')}
        </pre>
        <p
          className="font-bold  text-center absolute z-30 text-white font-custom inline-block left-[50%] -translate-x-[50%] stroke"
          style={numberStyles}
        >
          {number !== undefined && number}
        </p>
        <Modal
          title="Введите данные"
          name={'black-ball'}
          content={
            <PrintForm state={{ fullName, setFullName, number, setNumber }} />
          }
        >
          <div
            className="absolute left-1/2 w-[40%] -top-[3.5%] z-[30]  -translate-x-[50%] cursor-pointer rotate-45 flex justify-center"
            style={{ height: '20%' }}
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
        className="absolute top-[20.4%] left-[50%] -translate-x-[50%] z-20 "
        width={'26.2%'}
        height={'30.5%'}
        id={'6_7_8'}
        isTransparentBackground
        preview={          
            <img
              src={playerImage}
              alt="player example"
              className="w-full h-full object-cover"
            />          
        }
        cropAspect={1 / 2.5}
      />
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper=" grid-ball-cell w-full"
        className="absolute top-[68.8%] left-[50%] -translate-x-[50%] z-20 rotate-180 "
        width={'26.2%'}
        height={'31%'}
        id={'22_23_24'}
        isTransparentBackground
        preview={
          <img
            src={playerImage}
            alt="player example"
            className="w-full h-full object-cover"
          />
        }
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
