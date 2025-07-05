import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  email: string;
}

interface AccountContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const useAccount = () => {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error('useAccount must be used within AccountProvider');
  return ctx;
};

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = async (email: string, password: string) => {
    // Demo: accept any email/password
    const fakeUser = { username: email.split('@')[0], email };
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser));
    return true;
  };

  const register = async (username: string, email: string, password: string) => {
    // Demo: accept any registration
    const fakeUser = { username, email };
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AccountContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AccountContext.Provider>
  );
};
