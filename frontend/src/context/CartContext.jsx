import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, grams, totalPrice, size = null, quantity = 1) => {
    setCart(prevCart => {
      // Check if product and size already in cart
      const existing = prevCart.find(item => 
        item.product.id === product.id && 
        (product.isDress ? item.size === size : true)
      );
      if (existing) {
        // Update the grams, quantity, and price
        return prevCart.map(item => 
          item.product.id === product.id && (product.isDress ? item.size === size : true)
            ? { 
                ...item, 
                grams: item.grams + grams, 
                quantity: item.quantity + quantity,
                totalPrice: item.totalPrice + totalPrice 
              }
            : item
        );
      }
      return [...prevCart, { product, grams, totalPrice, size, quantity }];
    });
  };

  const removeFromCart = (productId, size = null) => {
    setCart(prevCart => prevCart.filter(item => 
      !(item.product.id === productId && (item.product.isDress ? item.size === size : true))
    ));
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
