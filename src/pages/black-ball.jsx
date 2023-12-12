import { ContactForm } from '../components/contact-form';
import { BallConstructorContext } from '../contexts/ball-constructor-context';
import { useBall } from '../hooks/use-ball';
import { ConstructorWithForm } from '../layouts/constructor-with-form';
import { ConstructorBlackBall } from '../modules/constructorBall';

export const BlackBall = () => {
  const contextValue = useBall();
  return (
    <BallConstructorContext.Provider value={contextValue}>
      <ConstructorWithForm
        form={<ContactForm />}
        constructor={<ConstructorBlackBall />}
      />
    </BallConstructorContext.Provider>
  );
};
