import { ACTIONS } from "./constants";

export type TAppContext = {
  state: TInitialState;
  dispatch: React.Dispatch<TAction>;
};

export type TInitialState = {
  isLoggedIn: boolean;
};

export type SET_IS_LOGGED_IN = {
  type: typeof ACTIONS.SET_IS_LOGGED_IN;
  payload: boolean;
};

export type TAction = SET_IS_LOGGED_IN;
