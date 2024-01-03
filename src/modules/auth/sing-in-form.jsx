import { useSingIn } from './hooks/use-sing-in';

export const SingInForm = () => {
  const { login, password, changeLogin, changePassword, singIn, error } =
    useSingIn();

  return (
    <div className="flex flex-col w-full gap-2">
      <h2 className="text-xl text-center">Авторизация для администратора</h2>
      <span className="divider"></span>
      <input
        onChange={changeLogin}
        value={login}
        type="text"
        placeholder="Логин"
        className="w-full input input-bordered"
      />
      <input
        onChange={changePassword}
        value={password}
        type="password"
        placeholder="Пароль"
        className="w-full input input-bordered"
      />
      <button onClick={singIn} className="w-full btn btn-primary">
        войти
      </button>
      {error && (
        <div className="self-center gap-2 badge badge-error text-base-100">
          {error}
        </div>
      )}
    </div>
  );
};
