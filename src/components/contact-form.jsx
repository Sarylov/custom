import { useState } from 'react';
import { TakeScreenshot } from '../helpers/take-screenshot';

export const ContactForm = () => {
  const [FIO, setFIO] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [error, setError] = useState('');

  function submit() {
    const isAllFilled = FIO && email && phone && adress;
    if (isAllFilled) {
      setError('');
      TakeScreenshot(FIO, 'constructor');
      console.log(FIO, email);
    } else {
      setError('Пожалуйста заполните все поля!');
    }
  }

  return (
    <div className="form flex flex-col justify-center items-center">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Фамилия имя отчество</span>
        </label>
        <input
          type="text"
          value={FIO}
          onChange={(e) => setFIO(e.target.value)}
          placeholder="Иванов Иван Иванович"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Контактная почта</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@example.ru"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Контактный телефон</span>
        </label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="89610000000"
          className="input input-bordered w-full max-w-xs no-arrows"
        />
        <label className="label">
          <span className="label-text">Адрес</span>
        </label>
        <input
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          placeholder="г. Москва ул. Пушкина дом 42"
          className="input input-bordered w-full max-w-xs no-arrows"
        />
        <span className="divider"></span>
        {error && <p className="text-error text-center mb-2 -mt-4">{error}</p>}
        <button className="btn btn-primary" onClick={submit}>
          Отправить заявку
        </button>
      </div>
    </div>
  );
};
