/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Modal } from '../components/modal';
import RevertIcon from '../assets/icons/revert.svg?react';
import {
  ConstructorContext,
  ConstructorProvider,
} from '../modules/constructorBall';

const ButtonRotate = ({ className = 'btn' }) => {
  const { rotateConstructor } = useContext(ConstructorContext);
  return (
    <button className={className} onClick={rotateConstructor}>
      <RevertIcon className="w-6" />
    </button>
  );
};

const RotatableConstructor = ({ constructor }) => {
  const { isRotateConstructor } = useContext(ConstructorContext);
  return (
    <div style={{ rotate: isRotateConstructor ? '180deg' : '0deg' }}>
      {constructor}
    </div>
  );
};

export const ConstructorWithForm = ({ form, constructor }) => {
  return (
    <ConstructorProvider>
      <div className="w-full h-full flex justify-between">
        <div className="flex-1 self-center hidden md:block">{form}</div>
        <div className="flex-1 flex flex-col items-center h-[100vh] overflow-y-auto md:border-dotted md:border-l-2 border-gray-700 py-4">
          <div className="flex items-start gap-2 w-full md:justify-between justify-center ">
            <ButtonRotate className="btn sticky ml-2 top-[50%] md:block hidden" />
            <RotatableConstructor constructor={constructor} />
            <span></span>
          </div>

          <div className="flex justify-center gap-2 mt-4 md:hidden">
            <Modal title={'Оформление'} name="Decoration" content={<>{form}</>}>
              <button className="btn btn-primary">Оформить заказ</button>
            </Modal>
            <ButtonRotate />
          </div>
        </div>
      </div>
    </ConstructorProvider>
  );
};
