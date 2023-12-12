import { ConstructorWithForm } from '../layouts/constructor-with-form';
import { ContactForm } from '../components/contact-form';
import { ConstructorBlackBall } from '../modules/constructorBall';

export const BlackBall = () => {
  return (
    <ConstructorWithForm
      form={<ContactForm />}
      constructor={<ConstructorBlackBall />}
    />
  );
};
