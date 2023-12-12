import { ContactForm } from '../components/contact-form';

import { ConstructorWithForm } from '../layouts/constructor-with-form';
import { ConstructorRedBall } from '../modules/constructorBall';

export const RedBall = () => {
  return (
    <ConstructorWithForm
      form={<ContactForm />}
      constructor={<ConstructorRedBall />}
    />
  );
};
