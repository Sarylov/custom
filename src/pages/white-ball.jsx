import { ContactForm } from '../components/contact-form';
import { ConstructorWithForm } from './../layouts/constructor-with-form';
import { ConstructorWhiteBall } from '../modules/constructorBall';

export const Whiteball = () => {
  return (
    <ConstructorWithForm
      form={<ContactForm />}
      constructor={<ConstructorWhiteBall />}
    />
  );
};
