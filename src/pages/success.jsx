import { useNavigate } from 'react-router-dom';

export const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-[100vh] container max-w-sm px-2">
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          Ваша заявка успешно создана! Мы свяжемся с вами в ближайшее время,
          чтобы уточнить детали доставки.
        </span>
      </div>
      <button className="btn self-start" onClick={() => navigate('/')}>
        <svg
          className="h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13Z"></path>
        </svg>
        Назад
      </button>
    </div>
  );
};
