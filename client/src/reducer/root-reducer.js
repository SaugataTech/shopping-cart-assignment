import { combineReducers } from 'redux';
import { categoryReducer } from './category-reducer';
import { cartReducer } from './cart-reducer';

export const rootReducer = combineReducers({
  category : categoryReducer,
  cart : cartReducer
});
