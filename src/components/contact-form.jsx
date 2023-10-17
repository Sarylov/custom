import { useState } from 'react';
import { TakeScreenshot } from '../helpers/take-screenshot';

export const ContactForm = () => {
  const [FIO, setFIO] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function submit() {
    if (FIO && email) {
      setError('');
      TakeScreenshot(FIO, 'constructor');
      console.log(FIO, email);
    } else {
      setError('Пожалуйста заполните все поля !');
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
        <span className="divider"></span>
        {error && <p className="text-error text-center mb-2 -mt-4">{error}</p>}
        <button className="btn btn-primary" onClick={submit}>
          оформить заказать
        </button>
      </div>
    </div>
  );
};
