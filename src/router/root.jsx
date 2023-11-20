import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="flex justify-center bg-[#0D1116]" data-theme="dark">
      <Outlet />
    </div>
  );
};
