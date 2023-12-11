import { useContext } from 'react';
import { Modal } from '../components/modal';
import RevertIcon from '../assets/icons/revert.svg?react';
import { BallConstructorContext } from '../contexts/ball-constructor-context';
import { useScreen } from '../hooks/use-screen';

// eslint-disable-next-line react/prop-types
export const ConstructorWithForm = ({ form, constructor }) => {
  const { isRotateConstructor, rotateConstructor } = useContext(
    BallConstructorContext
  );

  const { isMobileScreen } = useScreen();

  return (
    <div className="w-full h-full flex justify-between">
      {!isMobileScreen && (
        <div className="flex-1 self-center hidden md:block">{form}</div>
      )}
      <div className="flex-1 flex flex-col items-center h-[100vh] overflow-y-auto md:border-dotted md:border-l-2 border-gray-700 py-4">
        <div className="flex items-start gap-2 w-full md:justify-between justify-center ">
          <button
            className="btn sticky ml-2 top-[50%] md:block hidden "
            onClick={rotateConstructor}
          >
            <RevertIcon className="w-6" />
          </button>
          <div style={{ rotate: isRotateConstructor ? '180deg' : '0deg' }}>
            {constructor}
          </div>
          <span></span>
        </div>
        {isMobileScreen && (
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            <Modal title={'Оформление'} name="Decoration" content={<>{form}</>}>
              <button className="btn btn-primary">Оформить заказ</button>
            </Modal>
            <button className="btn" onClick={rotateConstructor}>
              <RevertIcon className="w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
