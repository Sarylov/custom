import { useLayoutEffect, useRef, useState } from 'react';
import grid from '../../assets/black_ball/grid.png';
import { Modal } from '../../components/modal';
import { PrintForm } from '../../components/print-form';

export const ConstructorBlackBall = () => {
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
          top: '9%',
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

  return (
    <div
      id="constructor"
      ref={refComponent}
      className="container max-w-screen-sm mx-auto px-[1%] relative self-start cursor-pointer"
    >
      <>
        <pre
          className="font-bold w-[98%] text-center absolute z-30 text-white leading-9 uppercase font-custom"
          style={nameStyles}
        >
          {fullName.trim().split(' ').join('\n')}
        </pre>
        <p
          className="font-bold w-[98%] text-center absolute z-30 text-white font-custom"
          style={numberStyles}
        >
          {number}
        </p>
      </>

      <Modal
        title="Введите данные"
        name={'black-ball'}
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
