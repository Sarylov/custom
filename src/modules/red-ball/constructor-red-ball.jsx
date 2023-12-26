import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import RedBallGrid from '../../assets/images/grids/red-grid.png';
import RedBallGridMin from '../../assets/images/grids/red-grid_mobile.png';
import Background from '../../assets/images/grids/red-grid_black.png';
import BackgroundMin from '../../assets/images/grids/red-grid_black_mobile.png';
import { BallConstructorContext } from '../../contexts/ball-constructor-context';
import { SquareCell } from '../../components/square-cell';
import { Modal } from '../../components/modal';
import { PrintForm } from '../../components/print-form';
import playerImage from '../../assets/images/player.png';
import { ConstucrotGridImage } from '../../components/constucrot-grid-image';
import { GridHints } from './../../components/grid-hints';
import { QuestionHint } from '../../components/question-hint';

export const ConstructorRedBall = () => {
  const {
    fullName,
    setFullName,
    number,
    setNumber,
    files,
    changeFile,
    changeCropped,
    isRotateConstructor,
  } = useContext(BallConstructorContext);
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
      }) ||
      (nameLen === 2 && {
        fontSize: getWidth(8, 7, 0.24),
      }) ||
      (nameLen === 3 && {
        fontSize: getWidth(13, 4, 0.07),
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

  return (
    <div
      id="constructor"
      ref={refComponent}
      className="mx-auto w-[300px] sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[500px] relative self-start"
    >
      {/* редактируемые прямоугольники */}
      <>
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[17.1%] left-[14.4%] -rotate-[25deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={1}
          id={9}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[17.1%] right-[14.4%] rotate-[12.3deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={2}
          id={13}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[35.12%] left-[14.4%] rotate-[25deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={3}
          id={12}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[35.12%] right-[14.4%] -rotate-[25deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={4}
          id={16}
        />
        {/* нижняя часть */}
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[65.55%] left-[14.4%] -rotate-[205deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={5}
          id={25}
        />

        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[65.55%] right-[14.4%] rotate-[205deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={6}
          id={29}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[83.5%] left-[14.4%] rotate-[205deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={7}
          id={28}
        />
        <SquareCell
          changeFile={changeFile}
          changeCropped={changeCropped}
          classNameWrapper=" grid-ball-cell w-full"
          className="absolute top-[83.5%] right-[14.4%] -rotate-[205deg]"
          width={'21.3%'}
          height={'9.7%'}
          preview={8}
          id={31}
        />
      </>
      {/* надписи */}
      <>
        <Modal
          title="Введите данные"
          closeButtonContent="Ввести данные"
          name={'black-ball'}
          content={
            <PrintForm state={{ fullName, setFullName, number, setNumber }} />
          }
        >
          <div className="absolute left-1/2 -translate-x-[50%] z-[30] w-[38%] h-[7%] top-[3%] flex justify-center items-center cursor-pointer">
            <pre
              className=" font-bold text-white uppercase font-custom stroke leading-[.8em] text-[2em] text-center"
              style={nameStyles}
            >
              {fullName && fullName.trim().split(' ').join('\n')}
            </pre>
          </div>
          <div className="absolute left-1/2 -translate-x-[50%] z-[30] top-[12.5%] w-[17%] h-[8%] flex justify-center items-center cursor-pointer">
            <p
              className="inline-block font-bold text-center text-white font-custom stroke"
              style={numberStyles}
            >
              {number !== undefined && number}
            </p>
          </div>
        </Modal>
      </>

      <ConstucrotGridImage
        largeImagePath={Background}
        minImagePath={BackgroundMin}
        className="absolute top-0 left-0 z-30 w-full grid-ball"
      />
      {/* фото на несколько ячеек */}
      <SquareCell
        changeFile={changeFile}
        changeCropped={changeCropped}
        classNameWrapper="grid-ball-cell w-full"
        className="absolute top-[20.4%] left-[50%] -translate-x-[50%] z-20  "
        width={'26.2%'}
        height={'30.5%'}
        id={'6_7_8'}
        isTransparentBackground
        modalTitle="Создайте макет вертикального сектора"
        preview={
          <img
            src={playerImage}
            alt="player example"
            className="object-cover w-full h-full"
          />
        }
        stepOneTitle="Загрузите фото в полный рост"
        isRounded={false}
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
        modalTitle="Создайте макет вертикального сектора"
        preview={
          <img
            src={playerImage}
            alt="player example"
            className="object-cover w-full h-full"
          />
        }
        stepOneTitle="Загрузите фото в полный рост"
        isRounded={false}
      />
      <ConstucrotGridImage
        largeImagePath={RedBallGrid}
        minImagePath={RedBallGridMin}
        onLoad={() => {
          setWidthComponent(refComponent.current.offsetWidth);
        }}
      />
      {/* подсказки */}
      <GridHints
        isRotateConstructor={isRotateConstructor}
        cellIds={[9, 13, 12, 16, 25, 29, 28, 31, '6_7_8', '22_23_24'].filter(
          (cellId) => !files[cellId]
        )}
      />
      {(fullName?.trim() === '' || fullName?.trim() === 'Имя фамилия') && (
        <QuestionHint
          text="Напишите свое имя и номер"
          top={3}
          left={65}
          isRotateConstructor={isRotateConstructor}
        />
      )}
    </div>
  );
};
