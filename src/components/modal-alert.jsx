/* eslint-disable react/prop-types */
export const ModalAlert = ({
  isOpen = true,
  onHide = () => {},
  icon,
  text,
  cancelBtn = (
    <button className="btn btn-sm" onClick={onHide}>
      Закрыть
    </button>
  ),
  acceptBtn,
  id,
}) => {
  return (
    <dialog id={id} className="modal" open={isOpen}>
      <div className="modal-box p-0">
        <div role="alert" className="alert">
          {icon}
          <span>{text}</span>
          <div>
            {cancelBtn}
            {acceptBtn && acceptBtn}
          </div>
        </div>
      </div>
    </dialog>
  );
};
