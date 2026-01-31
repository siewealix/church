import { useState } from 'react';
import { login } from '../api/resources';

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('tfmi_user');
    return stored ? JSON.parse(stored) : null;
  });

  const signIn = async (payload) => {
    const data = await login(payload);
    localStorage.setItem('tfmi_token', data.token);
    localStorage.setItem('tfmi_user', JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  };

  const signOut = () => {
    localStorage.removeItem('tfmi_token');
    localStorage.removeItem('tfmi_user');
    setUser(null);
  };

  return { user, signIn, signOut };
};
