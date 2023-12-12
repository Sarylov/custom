import { createContext } from 'react';
import { useConstructor } from './use-constructor';

export const ConstructorContext = createContext();

// eslint-disable-next-line react/prop-types
export const ConstructorProvider = ({ children }) => {
  const constructor = useConstructor();
  return (
    <ConstructorContext.Provider value={constructor}>
      {children}
    </ConstructorContext.Provider>
  );
};
