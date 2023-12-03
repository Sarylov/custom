/* eslint-disable react/prop-types */
import { QuestionHint } from './question-hint';

const hintPositions = {
  2: {
    top: 2,
    left: 45,
  },
  3: {
    top: 2,
    left: 66,
  },
  6: {
    top: 20,
    left: 55,
  },
  7: {
    top: 30.4,
    left: 55,
  },
  9: {
    top: 16.9,
    left: 31,
  },
  13: {
    top: 16.9,
    left: 80,
  },
  11: {
    top: 26,
    left: 18,
  },
  12: {
    top: 35,
    left: 31,
  },
  15: {
    top: 26,
    left: 93,
  },
  16: {
    top: 35,
    left: 80,
  },
  23: {
    top: 79,
    left: 55,
  },
  25: {
    top: 65.7,
    left: 31,
  },
  27: {
    top: 74.5,
    left: 18,
  },
  29: {
    top: 65.7,
    left: 80,
  },
  28: {
    top: 83.7,
    left: 31,
  },
  31: {
    top: 83.7,
    left: 80,
  },
  32: {
    top: 74.5,
    left: 93,
  },
  '6_7_8': {
    top: 30.7,
    left: 48,
  },
  '22_23_24': {
    top: 80,
    left: 48,
  },
};

export const GridHints = ({ cellIds, isRotateConstructor = false }) => {
  return (
    <>
      {cellIds.map((cellId) => {
        return (
          <QuestionHint
            key={cellId}
            text="Вставьте свое изображение"
            top={hintPositions[cellId]?.top || 0}
            left={hintPositions[cellId]?.left || 0}
            isRotateConstructor={isRotateConstructor}
          />
        );
      })}
    </>
  );
};
