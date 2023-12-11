/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import '../libs/cdek-widget.umd';

export const SdekWidget = ({ className = 'w-full h-full' }) => {
  useEffect(() => {
    new window.CDEKWidget({
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
      defaultLocation: [46.30778, 44.25583],
      onChoose(...data) {
        alert('Доставка выбрана');
        console.log(...data);
      },
    });
  }, []);
  console.log('render');
  return <div id="cdek-map" className={className}></div>;
};
