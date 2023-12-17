import './libs/cdek-widget.umd';
import { useEffect } from 'react';

export const useDeliveryInit = () => {
  useEffect(() => {
    window.widget = new window.CDEKWidget({
      from: {
        country_code: 'RU',
        city: 'Новосибирск',
        address: 'ул. Большевистская, д. 101',
      },
      root: 'cdek-map',
      apiKey: 'e499a9fc-683d-42f4-9e36-5d1cdde7b607',
      servicePath: 'http://172.21.58.133/service.php',
      hideDeliveryOptions: {
        door: true,
      },
      popup: true,
      defaultLocation: [44.25583, 46.30778],
      onChoose: (...data) => {
        alert('Доставка выбрана');
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
