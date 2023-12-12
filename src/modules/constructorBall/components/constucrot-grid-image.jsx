/* eslint-disable react/prop-types */
export const ConstucrotGridImage = ({
  largeImagePath,
  minImagePath,
  className = 'w-full relative grid-ball',
  ...props
}) => {
  return (
    <img
      src={minImagePath}
      srcSet={`${minImagePath} 768w, ${largeImagePath} 1280w`}
      alt="grid"
      className={className}
      {...props}
    />
  );
};
