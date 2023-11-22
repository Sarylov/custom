/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */

export function MailInput({
  mail,
  setMail,
  setIsFilled,
  className = 'input-bordered w-full max-w-xs',
}) {
  const handleChange = (event) => {
    const input = event.target.value;
    if (input.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== -1) {
      setIsFilled(true);
    } else setIsFilled(false);
    setMail(input);
  };

  return (
    <input
      type="email"
      value={mail}
      placeholder="example@example.ru"
      onChange={handleChange}
      className={`input ${className}`}
    />
  );
}
