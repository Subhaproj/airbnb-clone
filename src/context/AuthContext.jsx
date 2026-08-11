import {
  createContext,
  useState,
  useEffect
} from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {

    const user = JSON.parse(
  localStorage.getItem("loggedInUser")
);

    if (user) {
      setCurrentUser(user);
    }

  }, []);

  const signup = (user) => {

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const alreadyExists = users.find(
    item => item.email === user.email
  );

  if (alreadyExists) {
    return false;
  }

  users.push(user);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify(user)
  );

  setCurrentUser(user);

  return true;
};

  

  const login = (email, password) => {

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    item =>
      item.email === email &&
      item.password === password
  );

  if (user) {

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    setCurrentUser(user);

    return true;
  }

  return false;
};

  const logout = () => {

  localStorage.removeItem("loggedInUser");

  setCurrentUser(null);

};

  return (

    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}