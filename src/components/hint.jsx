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
        <div className={`badge badge-accent absolute ${className}`}>{text}</div>
      )}
    </div>
  );
};
