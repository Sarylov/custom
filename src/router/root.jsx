import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <Outlet />
    </div>
  );
};
