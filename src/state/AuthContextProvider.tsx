import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../configs/axios/axiosInstance.ts";
import { profile } from "../services/api/userService.ts";
interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile() {
    try {
      const res = await profile();

      setUser({
        username: res?.data?.data?.username,
        email: res?.data?.data?.email,
      });
    } catch (error) {
      setUser(null);
      console.error("User not authenticated");
    } finally {
      setLoading(false);
    }
  }

  useEffect(fetchProfile, []);

  const logout = () => {
    setUser(null);
  };

  const login = (userData: User) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
