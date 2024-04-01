import { ACTIONS } from './constants';

export type TInitialState = Record<string, string>;

export type TSessionStorageContext = {
  state: TInitialState;
  dispatch: React.Dispatch<TAction>;
};

export type setValue = {
  type: typeof ACTIONS.SET_SESSION_VALUE;
  payload: {
    key: string;
    value: string;
  };
};

export type removeValue = {
    type: typeof ACTIONS.REMOVE_SESSION_VALUE;
    payload: string;
};

export type clearSessionStorage = {
  type: typeof ACTIONS.CLEAR_SESSION_STORAGE;
};

export type TAction = setValue | removeValue | clearSessionStorage;
