import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function useUserName() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Solo acceder a localStorage en el cliente
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("userName");
      if (storedName) {
        setUserName(storedName);
      }
    }
  }, []);

  const updateUserName = (name) => {
    if (typeof window !== "undefined") {
      if (name) {
        localStorage.setItem("userName", name);
        setUserName(name);
      } else {
        localStorage.removeItem("userName");
        setUserName(null);
      }
    }
  };

  const userInfo = {
    userName,
    setUserName: updateUserName,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
