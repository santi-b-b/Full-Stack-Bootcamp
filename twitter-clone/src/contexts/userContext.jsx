'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authless, setAuthless] = useState(true);

  async function fetchUser() {
    let data = null;
    try {
      const res = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      });
      data = await res.json();
      setUser(data);
    } catch (err) {
      console.error('Error al cargar el usuario:', err);
    } finally {
      if (!data) {
        setAuthless(false);
      }
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, authless, setAuthless, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
