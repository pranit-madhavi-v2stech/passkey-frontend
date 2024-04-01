import { TAction, TInitialState } from './types';
import { ACTIONS, INITIAL_STATE as initialState } from './constants';

const sessionStorageReducer = (
  state: TInitialState,
  action: TAction,
): typeof initialState => {
  switch (action.type) {
    case ACTIONS.SET_SESSION_VALUE:
      sessionStorage.setItem(action.payload.key, action.payload.value);
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case ACTIONS.REMOVE_SESSION_VALUE:
        sessionStorage.removeItem(action.payload);
        const newState = { ...state };
        delete newState[action.payload];
        return newState;
    case ACTIONS.CLEAR_SESSION_STORAGE:
      sessionStorage.clear();
      return {};
    default:
      return state;
  }
};

export default sessionStorageReducer;
