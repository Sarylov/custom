import { useEffect } from 'react';

const VITE_URL_CDEK = import.meta.env.VITE_URL_CDEK;
const VITE_YANDEX_MAP_KEY = import.meta.env.VITE_YANDEX_MAP_KEY;

export const useDeliveryInit = () => {
  useEffect(() => {
    window.widget = new window.CDEKWidget({
      from: {
        country_code: 'RU',
        city: 'Новосибирск',
        address: 'ул. Большевистская, д. 101',
      },
      root: 'cdek-map',
      apiKey: VITE_YANDEX_MAP_KEY,
      servicePath: VITE_URL_CDEK,
      defaultCity: 'Москва',
      hideDeliveryOptions: {
        door: true,
      },
      popup: true,
      defaultLocation: [37.6156, 55.7522],
      onChoose: (...data) => {
        console.log(...data);
      },
    });
  }, []);

  function openWidgetCdek() {
    window.widget.open();
  }

  function closeWidgetCdek() {
    window.widget.close();
  }

  return { openWidgetCdek, closeWidgetCdek };
};
