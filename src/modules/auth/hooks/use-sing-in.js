import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth-provider';

const URL_API_STRAPI = import.meta.env.VITE_URL_STRAPI_API;
const SINGIN_URL = URL_API_STRAPI + '/auth/local';

const DASHBOARD_ROUTE = '/admin/dashboard';

export const useSingIn = () => {
  const { checkAuth, redirect } = useContext(AuthContext);
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const isAuth = checkAuth();
    console.log(isAuth);
    if (isAuth) {
      redirect(DASHBOARD_ROUTE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeLogin(e) {
    setLogin(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  async function fetchSingIn(login, password) {
    return fetch(SINGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: login,
        password: password,
      }),
    }).then((response) => response.json());
  }

  async function singIn() {
    if (login && password) {
      const data = await fetchSingIn(login, password);
      if (data.jwt) {
        localStorage.setItem('adminToken', data.jwt);
        setError(null);
        redirect(DASHBOARD_ROUTE);
      } else {
        console.error(data);
        setError('Произошла ошибка, проверьте логин и пароль');
      }
    } else setError('Заполните поля логина и пароля');
  }

  return { login, password, changeLogin, changePassword, singIn, error };
};
