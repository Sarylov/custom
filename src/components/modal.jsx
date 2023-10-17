// interface IModal {
//   title: string;
//   name: string;
//   children: React.ReactNode;
//   content: JSX.Element;
// }

// eslint-disable-next-line react/prop-types
export const Modal = ({ children, title, content, name }) => {
  return (
    <>
      <div onClick={() => window[name].showModal()}>{children}</div>
      <dialog id={name} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          {content}
        </div>
      </dialog>
    </>
  );
};
