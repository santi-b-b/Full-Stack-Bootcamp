import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Intentamos leer del localStorage al iniciar
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [cartTotal, setCartTotal] = useState(0);

  const [cartItemCount, setCartItemCount] = useState(0);

  // Cada vez que el carrito cambie, lo guardamos
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItemCount(cart.reduce((total, item) => total + (item.quantity || 0), 0));
    setCartTotal(cart.reduce((total, item) => total + (item.quantity * item.price || 0), 0));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

const removeFromCart = (product) => {
  setCart((prev) => {
    const existing = prev.find(item => item.id === product.id);

    // Si no existe, devolvemos el mismo estado
    if (!existing) return prev;

    // Si solo hay uno, lo eliminamos
    if (existing.quantity === 1) {
      return prev.filter(item => item.id !== product.id);
    }

    // Si hay más de uno, restamos uno
    return prev.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  });
};

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
