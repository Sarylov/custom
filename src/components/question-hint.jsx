/* eslint-disable react/prop-types */
import QuestionIcon from '../assets/icons/question.svg?react';
import { Hint } from './hint';

export const QuestionHint = ({
  text = 'Интерактивный элемент',
  top = 0,
  left = 0,
  isRotateConstructor = false,
}) => {
  return (
    <Hint
      className="z-30 absolute tooltip-left min-w-[1.4rem] w-[4%] cursor-pointer tooltip-accent"
      text={text}
      style={{
        top: top + '%',
        left: left + '%',
        rotate: isRotateConstructor ? '180deg' : '0deg',
      }}
    >
      <QuestionIcon className="w-full" />
    </Hint>
  );
};
