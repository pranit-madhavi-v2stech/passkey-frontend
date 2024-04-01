import React, { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE as initialState } from "./constants";

import { TAppContext } from "./types";
import reducer from "./reducer";

const AppContext = createContext<TAppContext>({} as TAppContext);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppState = () => useContext(AppContext);

export { useAppState };

export default AppProvider;
