import { TInitialState } from "./types";

export const ACTIONS = {
  SET_SESSION_VALUE: 'SET_SESSION_VALUE',
  REMOVE_SESSION_VALUE: 'REMOVE_SESSION_VALUE',
  CLEAR_SESSION_STORAGE: 'CLEAR_SESSION_STORAGE',
} as const;

export const INITIAL_STATE = {} as const;

export const loadInitialStateFromSessionStorage = (): TInitialState => {
  let initialState: TInitialState = {};
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key) {
      const value = sessionStorage.getItem(key);
      if (value) {
        initialState[key] = value;
      }
    }
  }
  return initialState;
};