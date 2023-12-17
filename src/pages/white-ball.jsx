import { ContactForm } from '../components/contact-form';
import { BallConstructorContext } from './../contexts/ball-constructor-context';
import { useBall } from '../hooks/use-ball';
import { ConstructorWithForm } from './../layouts/constructor-with-form';
import { DeliveryProvider } from '../modules/delivery';
import { ConstructorWhiteball } from '../modules/white-ball';

export const Whiteball = () => {
  const contextValue = useBall();
  return (
    <BallConstructorContext.Provider value={contextValue}>
      <DeliveryProvider>
        <ConstructorWithForm
          form={<ContactForm />}
          constructor={<ConstructorWhiteball />}
        />
      </DeliveryProvider>
    </BallConstructorContext.Provider>
  );
};
