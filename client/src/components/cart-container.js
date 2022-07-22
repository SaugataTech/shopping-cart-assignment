import { useDispatch } from 'react-redux';
import { createAction, addCartItem, removeCartItem, getCartCount, getCartTotal } from '../utils/util';
import { ACTION_TYPES } from '../action/action-types';

const CartContainerModal = ({cartItems}) => {
  const dispatch = useDispatch();

  const addItemToCart = (e, item) => {
    e.preventDefault();
    const updatedCartItems = addCartItem(cartItems, item);
    const updatedCartCount = getCartCount(updatedCartItems);
    const updatedCartTotal = getCartTotal(updatedCartItems);
    dispatch(createAction(ACTION_TYPES.INC_CART_COUNT, { cartItems: updatedCartItems, cartCount: updatedCartCount, cartTotal: updatedCartTotal }));
  }

  const removeItemToCart = (e, item) => {
    e.preventDefault();
    const updatedCartItems = removeCartItem(cartItems, item);
    const updatedCartCount = getCartCount(updatedCartItems);
    const updatedCartTotal = getCartTotal(updatedCartItems);
    dispatch(createAction(ACTION_TYPES.DEC_CART_COUNT, { cartItems: updatedCartItems, cartCount: updatedCartCount, cartTotal: updatedCartTotal }));
  }

  return (
    <div className="container">
      {
        cartItems.map(item => (
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2">
              <img src={item.imageURL} alt={item.name} className="cart-img"/>
            </div>

            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="col-sm-12 col-md-12 col-lg-12" style={{paddingBottom:'10px'}}><h5>{item.name}</h5></div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <button className="cart-btn" onClick={(e)=> removeItemToCart(e, item)}>-</button>
                <span className="cart-mul">{item.quantity}</span>
                <button className="cart-btn" onClick={(e)=>addItemToCart(e, item)}>+</button>
                <span className="cart-mul">X</span>
                <span>{item.price}</span>
              </div>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 item-price">
              Rs.{item.quantity * item.price}
            </div>
          </div>
        ))
      }
      <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-3">
          <img src="images/lowest-price.png" alt="lowest price tag" className=""/>
        </div>
        <div className="col-sm-9 col-md-9 col-lg-9" style={{paddingTop: '14px'}}>
          You won't find it cheaper anywhere
        </div>
      </div>
    </div>
  )
}

export default CartContainerModal;
