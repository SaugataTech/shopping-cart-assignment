import { ACTION_TYPES } from '../action/action-types';

const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case ACTION_TYPES.ADD_CART_ITEM:
      return {...state, ...payload };

    case ACTION_TYPES.INC_CART_COUNT:
      return {...state, ...payload};

    case ACTION_TYPES.DEC_CART_COUNT:
      return {...state, ...payload};

    default:
      return state;
  }
}
