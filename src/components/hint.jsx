/* eslint-disable react/prop-types */

export const Hint = ({
  text = 'Нажмите чтобы изменить',
  className = '',
  component,
}) => {
  return (
    <div className="w-full h-full relative" style={{ pointerEvents: 'none' }}>
      {component ? (
        { component }
      ) : (
        <div
          className={`text-white text-center p-2 bg-accent rounded-xl  absolute ${className}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};
