import { ContactForm } from '../components/contact-form';
import { BallConstructorContext } from './../contexts/ball-constructor-context';
import { useWhiteBall } from '../hooks/use-white-ball';
import { ConstructorWithForm } from './../layouts/constructor-with-form';
import { ConstructorWhiteball } from '../modules/white-ball';

export const Whiteball = () => {
  const contextValue = useWhiteBall();
  return (
    <BallConstructorContext.Provider value={contextValue}>
      <ConstructorWithForm
        form={<ContactForm />}
        constructor={<ConstructorWhiteball />}
      />
    </BallConstructorContext.Provider>
  );
};
