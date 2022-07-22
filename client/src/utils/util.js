export const addCartItem = ( cartItems, itemToAdd ) => {
  const existingItem = cartItems.find(item => item.id === itemToAdd.id)

  if( existingItem ){
    return cartItems.map((item) => item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1 } : item );
  }

  return [...cartItems, {...itemToAdd, quantity: 1 }];
}

export const removeCartItem = ( cartItems, itemToRemove ) => {
  const existingItem = cartItems.find(item => item.id === itemToRemove.id)

  if( existingItem.quantity === 1 ){
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((item) => item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1 } : item );
}

export const getCartCount = ( cartItems ) => {
  return cartItems.reduce((total,item) =>
    total + item.quantity,
    0
  );
}

export const getCartTotal = ( cartItems ) => {
  return cartItems.reduce((total,item) =>
    total + item.quantity * item.price,
    0
  );
}

export const createAction = (type, payload) => ({ type, payload });
