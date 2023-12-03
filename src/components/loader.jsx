/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export const Loader = ({ size = 'lg' }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <span className={`loading loading-spinner loading-${size}`}></span>
    </div>
  );
};
