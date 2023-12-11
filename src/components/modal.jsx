/* eslint-disable react/prop-types */
export const Modal = ({
  children,
  title,
  content,
  name,
  closeButton,
  className = '',
}) => {
  function showModal() {
    document.getElementById(name).showModal();
  }

  return (
    <>
      <div onClick={showModal}>{children}</div>
      <dialog id={name} className="modal">
        <div className={`modal-box ${className}`}>
          <form method="dialog">
            <h3 className="font-bold text-lg">{title}</h3>
            {content}
            {closeButton ? (
              closeButton
            ) : (
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            )}
          </form>
        </div>
      </dialog>
    </>
  );
};
