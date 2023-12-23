import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import grid from '../../assets/images/grids/black-grid.png';
import gridMin from '../../assets/images/grids/black-grid_mobile.png';
import { Modal } from '../../components/modal';
import { PrintForm } from '../../components/print-form';
import { BallConstructorContext } from '../../contexts/ball-constructor-context';
import { ConstucrotGridImage } from '../../components/constucrot-grid-image';
import { QuestionHint } from '../../components/question-hint';

export const ConstructorBlackBall = () => {
  const { fullName, setFullName, number, setNumber, isRotateConstructor } =
    useContext(BallConstructorContext);
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
      className="mx-auto w-[300px] sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[500px]  relative self-start cursor-pointer"
    >
      <Modal
        title="Введите данные"
        name={'black-ball'}
        closeButtonContent="Ввести данные"
        content={
          <PrintForm state={{ fullName, setFullName, number, setNumber }} />
        }
      >
        {/* Надписи на мяче */}
        <div className="absolute left-1/2 -translate-x-[50%] z-[30] w-[38%] h-[7%] top-[3%] flex justify-center items-center cursor-pointer">
          <pre
            className=" font-bold text-white uppercase font-custom  leading-[.8em] text-[2em] text-center"
            style={nameStyles}
          >
            {fullName && fullName.trim().split(' ').join('\n')}
          </pre>
        </div>
        <div className="absolute left-1/2 -translate-x-[50%] z-[30] top-[12.5%] w-[17%] h-[8%] flex justify-center items-center cursor-pointer">
          <p
            className="font-bold text-center text-white font-custom inline-block"
            style={numberStyles}
          >
            {number !== undefined && number}
          </p>
        </div>

        <ConstucrotGridImage
          largeImagePath={grid}
          minImagePath={gridMin}
          onLoad={() => {
            setWidthComponent(refComponent.current.offsetWidth);
          }}
        />
      </Modal>

      {/* подсказки */}
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
