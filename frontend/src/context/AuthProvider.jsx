import { createContext, useState } from "react";
import axiosClient from "../axiosClient";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(true);

  const login = (data) => {
    axiosClient
      .post("/photographer/login", data)
      .then((response) => {
        setUser(response.data);
        setIsloading(false);
        navigate("/galleries");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signup = (data) => {
    axiosClient
      .post("/photographer/signup", data)
      .then((response) => {
        setUser(response.data);
        setIsloading(false);
        navigate("/clients");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    axiosClient
      .post("/photographer/logout")
      .then((response) => {
        setUser(true);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
