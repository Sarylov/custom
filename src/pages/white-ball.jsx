import { useState } from 'react';
import { ConstuctorWhiteball } from '../components/constuctor-white-ball';
import { Modal } from '../components/modal';
import { ContactForm } from '../components/contact-form';

export const Whiteball = () => {
  const [isReverte, setIsReverte] = useState(false);
  return (
    <div className="w-full h-full flex justify-between">
      <div className="flex-1 self-center hidden md:block">
        <ContactForm />
      </div>
      <div className="flex-1 flex flex-col items-center h-[100vh] overflow-y-auto md:border-dotted md:border-l-2 border-gray-700 py-4">
        <div className="flex items-start gap-2 w-full md:justify-between justify-center ">
          <button
            className="btn sticky ml-2 top-[50%] md:block hidden "
            onClick={() => setIsReverte((prev) => !prev)}
          >
            <svg
              className="w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.519 9.348h4.5v-4.5"></path>
              <path d="M17.831 17.831a8.25 8.25 0 1 1 0-11.662l3.188 3.178"></path>
            </svg>
          </button>
          <div style={{ rotate: isReverte ? '180deg' : '0deg' }}>
            <ConstuctorWhiteball />
          </div>
          <span></span>
        </div>
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          <Modal
            title={'Оформление'}
            name="Decoration"
            content={<ContactForm />}
          >
            <button className="btn btn-primary">оформить заказ</button>
          </Modal>
          <button className="btn" onClick={() => setIsReverte((prev) => !prev)}>
            <svg
              className="w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.519 9.348h4.5v-4.5"></path>
              <path d="M17.831 17.831a8.25 8.25 0 1 1 0-11.662l3.188 3.178"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
