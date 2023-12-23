import { ContactForm } from '../components/contact-form';
import { BallConstructorContext } from '../contexts/ball-constructor-context';
import { useBall } from '../hooks/use-ball';
import { ConstructorWithForm } from '../layouts/constructor-with-form';
import { DeliveryProvider } from '../modules/delivery';
import { ConstructorRedBall } from '../modules/red-ball';

export const RedBall = () => {
  const contextValue = useBall();
  return (
    <DeliveryProvider>
      <BallConstructorContext.Provider value={contextValue}>
        <ConstructorWithForm
          form={<ContactForm />}
          constructor={<ConstructorRedBall />}
        />
      </BallConstructorContext.Provider>
    </DeliveryProvider>
  );
};
