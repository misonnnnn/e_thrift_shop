"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
    if(token){
      getUser(token);
    }
  }, []);

  const login = async (token: string) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    await getUser(token);
    router.push("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    router.refresh()
  };

  const getUser = async (token: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (data.success) {
        setUser(data.user); // store user in context
      }
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
