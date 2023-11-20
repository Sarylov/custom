/* eslint-disable react/prop-types */
// interface IModal {
//   title: string;
//   name: string;
//   children: React.ReactNode;
//   content: JSX.Element;
// }

// eslint-disable-next-line react/prop-types
export const Modal = ({
  children,
  title,
  content,
  name,
  closeButtonContent,
}) => {
  return (
    <>
      <div onClick={() => window[name].showModal()}>{children}</div>
      <dialog id={name} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <h3 className="font-bold text-lg">{title}</h3>
            {content}
            {closeButtonContent ? (
              <button className="btn w-full btn-success mt-2">
                {closeButtonContent}
              </button>
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
