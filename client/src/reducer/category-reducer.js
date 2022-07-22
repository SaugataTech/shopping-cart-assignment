import { ACTION_TYPES } from '../action/action-types';

const INITIAL_STATE = {
  categories: [],
  error: null
}

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case ACTION_TYPES.SET_CATEGORY_SUCCESS:
      return {...state, categories: payload };

    case ACTION_TYPES.SET_CATEGORY_FAILED:
     return {...state, error: payload};

    default:
      return state;
  }
}
