'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authless, setAuthless] = useState(true);

  async function fetchUser() {
    try {
      const res = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error('Error al cargar el usuario:', err);
    } finally {
      setAuthless(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return <UserContext.Provider value={{ user, authless }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
