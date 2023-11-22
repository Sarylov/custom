import { useContext, useState } from 'react';
import { getScreenshot, getTxtFile } from '../helpers/files';
import { BallConstructorContext } from '../contexts/ball-constructor-context';
import { PhoneInput } from './phone-input';
import { MailInput } from './mail-input';

export const ContactForm = () => {
  const { sendFiles, fetchPay } = useContext(BallConstructorContext);
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);

  const [FIO, setFIO] = useState('');
  const [email, setEmail] = useState('');
  const [isFilledEmail, setIsFilledEmail] = useState(false);
  const [phone, setPhone] = useState('');
  const [isFilledPhone, setIsFilledPhone] = useState(false);
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  async function submit() {
    const isAllFilled = FIO && isFilledEmail && isFilledPhone && address;
    if (isAllFilled) {
      setError('');
      setIsLoadingRequest(true);
      const screenshot = await getScreenshot('constructor');
      const userInfo = `ФИО: ${FIO}\nПочта: ${email}\nТелефон: ${phone}\nАдрес: ${address}`;
      const userInfoFile = getTxtFile(userInfo);

      try {
        const res = await sendFiles(
          [
            { name: 'user info', file: userInfoFile },
            { name: 'result', file: screenshot },
          ],
          email
        );

        if (res.status) {
          const createPayRes = await fetchPay();
          if (createPayRes.status === 200) {
            window.location.replace(createPayRes.data.confirmation_url);
          } else throw new Error();
        } else throw new Error();

        setIsLoadingRequest(false);
      } catch (error) {
        setIsLoadingRequest(false);
        console.error(error);
        setError('Произошла, какая то ошибка, повторите попытку позднее');
      }
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
        <MailInput
          mail={email}
          setMail={setEmail}
          setIsFilled={setIsFilledEmail}
        />

        <label className="label">
          <span className="label-text">Контактный телефон</span>
        </label>
        <PhoneInput
          phone={phone}
          setPhone={setPhone}
          setIsFilled={setIsFilledPhone}
        />

        <label className="label">
          <span className="label-text">Адрес</span>
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="г. Москва ул. Пушкина дом 42"
          className="input input-bordered w-full max-w-xs no-arrows"
        />

        <span className="divider"></span>
        {error && <p className="text-error text-center mb-2 -mt-4">{error}</p>}

        {isLoadingRequest ? (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            загрузка
          </button>
        ) : (
          <button className="btn btn-primary" onClick={submit}>
            Перейти к оплате
          </button>
        )}
      </div>
    </div>
  );
};
