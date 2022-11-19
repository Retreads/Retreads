import React, { useState, useContext, createContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export function providerAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser("logeado");
  };
  return {
    user,
    signIn,
  };
}
