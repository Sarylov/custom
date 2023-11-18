/* eslint-disable react/prop-types */

export const PrintForm = ({ state }) => {
  const { fullName, setFullName, number, setNumber } = state;

  const handleChangeNumber = (e) => {
    if (String(e.target.value).length < 3) {
      setNumber(e.target.value);
    }
  };
  
  const handleChangeName = (e) => {
    if (e.target.value.trim().split(" ").length < 4) {
      setFullName(e.target.value);
    }
  };

  return (
    <div className="w-full">
      <label className="label">
        <span className="label-text">Имя Игрока</span>
      </label>
      <input
        type="text"
        value={fullName}
        onChange={handleChangeName}
        className="input input-bordered w-full"
      />
      <label className="label">
        <span className="label-text">Номер игрока</span>
      </label>
      <input
        type="number"
        value={number}
        onChange={handleChangeNumber}
        className="input input-bordered w-full"
      />
    </div>
  );
};
