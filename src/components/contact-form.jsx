import { useContext, useState } from 'react';
import { getScreenshot, getTxtFile } from '../helpers/files';
import { BallConstructorContext } from '../contexts/ball-constructor-context';
import { PhoneInput } from './phone-input';
import { MailInput } from './mail-input';
import { DeliveryContext } from '../modules/delivery';

export const ContactForm = () => {
  const { openWidgetCdek, closeWidgetCdek } = useContext(DeliveryContext);

  const { sendFiles, fetchPay } = useContext(BallConstructorContext);
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);
  const [error, setError] = useState('');

  const [isConstructorFullFilled, setIsConstructorFullFill] = useState(false);

  const [FIO, setFIO] = useState('');
  const [email, setEmail] = useState('');
  const [isFilledEmail, setIsFilledEmail] = useState(false);
  const [phone, setPhone] = useState('');
  const [isFilledPhone, setIsFilledPhone] = useState(false);
  const [address, setAddress] = useState('');

  function chooseAddress() {
    window.widget.params.onChoose = (...data) => {
      const info = data[2];
      const selectedAddress = `${info?.country_code}, ${info?.city}, ${info?.address}, ${info?.name}, ${info?.type}`;
      setAddress(selectedAddress);
      closeWidgetCdek();
    };
    window['Decoration'].close();
    openWidgetCdek();
  }

  async function submit(event) {
    event.preventDefault();
    checkFullFilledForm() && checkFullFilledConstructor() && redirectToPay();
  }

  function checkFullFilledConstructor() {
    const interactiveElementsConstructor =
      document.querySelectorAll('.question-hint');
    const isEmpty = interactiveElementsConstructor.length === 0;
    if (isEmpty) {
      return true;
    } else {
      if (isConstructorFullFilled) return true;
      else {
        setIsConstructorFullFill(true);
        return false;
      }
    }
  }

  function checkFullFilledForm() {
    const isAllFilled = FIO && isFilledEmail && isFilledPhone && address;
    if (isAllFilled) {
      setError('');
      return true;
    } else {
      setError('Пожалуйста заполните все поля!');
      return false;
    }
  }

  async function redirectToPay() {
    setError('');
    setIsConstructorFullFill(false);
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
        {
          FIO,
          email,
          phone,
          address,
        }
      );

      if (res.status) {
        const orderId = res.data.cloud_dir_name;
        const createPayRes = await fetchPay(orderId, email);
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
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col items-center justify-center form"
    >
      <div className="w-full max-w-xs form-control">
        <label className="label">
          <span className="label-text">Фамилия имя отчество</span>
        </label>
        <input
          type="text"
          value={FIO}
          onChange={(e) => setFIO(e.target.value)}
          placeholder="Иванов Иван Иванович"
          className="w-full max-w-xs input input-bordered"
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
          <span className="label-text">Адрес доставки</span>
        </label>
        <input
          type="text"
          value={address}
          readOnly
          placeholder="Не выбран"
          className="w-full max-w-xs input input-bordered no-arrows"
        />

        <button
          type="button"
          className="mt-1 btn btn-sm"
          onClick={chooseAddress}
        >
          выбрать {address ? 'другой' : ''} адрес доставки
        </button>

        <span className="divider"></span>

        <div className="text-sm">
          <div className="flex justify-between">
            <span>Стоймость доставки</span> <span>500 руб.</span>
          </div>
          <div className="flex justify-between">
            <span>Стоймость мяча</span> <span>4500 руб.</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Общая стоймость</span> <span>5000 руб.</span>
          </div>
        </div>

        {error && <p className="mb-2 text-center text-error ">{error}</p>}
        {isConstructorFullFilled && (
          <p className="mb-2 text-center text-warning ">
            Не все поля конструктора заполнены! Все равно перейти к оплате?
          </p>
        )}

        {isLoadingRequest ? (
          <button type="button" className="btn">
            <span className="loading loading-spinner"></span>
            загрузка
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            {isConstructorFullFilled
              ? 'Все равно перейти к оплате'
              : 'Перейти к оплате'}
          </button>
        )}
      </div>
    </form>
  );
};
