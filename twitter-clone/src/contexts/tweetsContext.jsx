import { createContext, useState, useEffect } from 'react';

export const TweetsContext = createContext();

const tweetsProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [cartTotal, setCartTotal] = useState(0);

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItemCount(cart.reduce((total, item) => total + (item.quantity || 0), 0));
    setCartTotal(cart.reduce((total, item) => total + (item.quantity * item.price || 0), 0));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter((item) => item.id !== product.id);
      }

      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const clearCart = () => setCart([]);

  return (
    <TweetsContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartItemCount }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
