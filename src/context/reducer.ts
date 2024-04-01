import { ACTIONS, INITIAL_STATE as initialState } from "./constants";
import { TAction, TInitialState } from "./types";

const appReducer = (
  state: TInitialState,
  action: TAction
): typeof initialState => {
  switch (action.type) {
    case ACTIONS.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
