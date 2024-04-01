import { TInitialState } from "./types";

export const ACTIONS = {
  SET_IS_LOGGED_IN: "SET_IS_LOGGED_IN",
};

export const INITIAL_STATE: TInitialState = {
  isLoggedIn: false,
};
