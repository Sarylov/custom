import { ContactForm } from '../components/contact-form';
import { BallConstructorContext } from '../contexts/ball-constructor-context';
import { useWhiteBall } from '../hooks/use-white-ball';
import { ConstructorWithForm } from '../layouts/constructor-with-form';
import { ConstructorBlackBall } from './../modules/black-ball';

export const BlackBall = () => {
  const contextValue = useWhiteBall();
  return (
    <BallConstructorContext.Provider value={contextValue}>
      <ConstructorWithForm
        form={<ContactForm />}
        constructor={<ConstructorBlackBall />}
      />
    </BallConstructorContext.Provider>
  );
};
