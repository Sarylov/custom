import { SingInForm } from './../modules/auth';

export const SingIn = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="max-w-[30rem] w-full px-4">
        <SingInForm />
      </div>
    </div>
  );
};
