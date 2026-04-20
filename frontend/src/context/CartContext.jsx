import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, grams, totalPrice) => {
    setCart(prevCart => {
      // Check if product already in cart
      const existing = prevCart.find(item => item.product.id === product.id);
      if (existing) {
        // Update the grams and price
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, grams: item.grams + grams, totalPrice: item.totalPrice + totalPrice }
            : item
        );
      }
      return [...prevCart, { product, grams, totalPrice }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const cartItemsCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
