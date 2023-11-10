import { ConstuctorWhiteBoll } from '../components/constuctor-white-boll';
import { ContactForm } from './../components/contact-form';

export const WhiteBoll = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="flex-1 self-center">
        <ContactForm />
      </div>
      <span className="divider divider-horizontal"></span>
      <div className="flex-1 h-[100vh] overflow-y-auto">
        <ConstuctorWhiteBoll />
      </div>
    </div>
  );
};
