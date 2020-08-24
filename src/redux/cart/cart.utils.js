export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.sku === cartItemToAdd.sku
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.sku === cartItemToAdd.sku
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.sku === cartItemToRemove.sku
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.sku !== cartItemToRemove.sku);
  }

  return cartItems.map(cartItem =>
    cartItem.sku === cartItemToRemove.sku
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
