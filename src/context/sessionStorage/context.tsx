import React from 'react';
import { loadInitialStateFromSessionStorage } from './constants';
import reducer from './sessionStorageReducer';
import { TSessionStorageContext } from './types';
const SessionStorageContext = React.createContext<TSessionStorageContext>(
  {} as TSessionStorageContext,
);

const SessionStorageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const initialState = loadInitialStateFromSessionStorage();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <SessionStorageContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionStorageContext.Provider>
  );
};

const useSessionStorage = () => React.useContext(SessionStorageContext);

export { useSessionStorage };

export default SessionStorageProvider;
