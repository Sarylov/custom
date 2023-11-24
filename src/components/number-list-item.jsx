/* eslint-disable react/prop-types */
export const NumberListItem = ({ number, children }) => {
  return (
    <div className="flex w-full gap-2">
      <span>{number}</span>
      <div className="flex-grow flex flex-col gap-2">{children}</div>
    </div>
  );
};
