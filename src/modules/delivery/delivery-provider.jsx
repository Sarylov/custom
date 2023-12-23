import { createContext } from 'react';
import { useDeliveryInit } from './use-delivery-init';

export const DeliveryContext = createContext();

// eslint-disable-next-line react/prop-types
export const DeliveryProvider = ({ children }) => {
  const contextValue = useDeliveryInit();
  return (
    <DeliveryContext.Provider value={contextValue}>
      <div id="cdek-map" data-theme="light"></div>

      {children}
    </DeliveryContext.Provider>
  );
};
