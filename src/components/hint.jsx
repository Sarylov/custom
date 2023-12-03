/* eslint-disable react/prop-types */

export const Hint = ({ children, text, className = '', ...props }) => {
  return (
    <div
      className={`text-white text-center bg-accent rounded-xl tooltip ${className}`}
      data-tip={text}
      {...props}
    >
      {children}
    </div>
  );
};
