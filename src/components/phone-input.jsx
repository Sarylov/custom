/* eslint-disable react/prop-types */
import InputMask from 'react-input-mask';

export function PhoneInput({
  phone,
  setPhone,
  setIsFilled,
  className = 'input-bordered w-full max-w-xs',
}) {
  const handleChange = (event) => {
    const input = event.target.value;
    setPhone(input);
    if (!input.includes('_')) setIsFilled(true);
    else setIsFilled(false);
  };

  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      type="tel"
      maskChar="_"
      alwaysShowMask
      value={phone}
      onChange={handleChange}
      className={`input ${className}`}
    />
  );
}
