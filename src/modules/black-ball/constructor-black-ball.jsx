import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import grid from '../../assets/black_ball/grid.png';
import { Modal } from '../../components/modal';
import { PrintForm } from '../../components/print-form';
import { BallConstructorContext } from '../../contexts/ball-constructor-context';

export const ConstructorBlackBall = () => {
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

  return (
    <div
      id="constructor"
      ref={refComponent}
      className="container max-w-screen-sm mx-auto px-[1%] relative self-start cursor-pointer"
    >
      <>
        <pre
          className="font-bold w-[98%] text-center absolute z-30 text-white leading-9 uppercase font-custom "
          style={{ ...nameStyles, pointerEvents: 'none' }}
        >
          {fullName && fullName.trim().split(' ').join('\n')}
        </pre>
        <p
          className="font-bold w-[98%] text-center absolute z-30 text-white font-custom"
          style={{ ...numberStyles, pointerEvents: 'none' }}
        >
          {number !== undefined && number}
        </p>
      </>

      <Modal
        title="Введите данные"
        name={'black-ball'}
        closeButtonContent="Ввести данные"
        content={
          <PrintForm state={{ fullName, setFullName, number, setNumber }} />
        }
      >
        <img
          onLoad={() => {
            setWidthComponent(refComponent.current.offsetWidth);
          }}
          src={grid}
          alt="grid_black_ball"
          className="w-full relative grid-ball"
        />
      </Modal>
    </div>
  );
};
