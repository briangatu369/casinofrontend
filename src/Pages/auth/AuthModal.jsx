import { createContext } from "react";
import NavBar from "../../components/NavBar";
import Login from "./Login/Login";
import Register from "./Register/Register";
import useToggle from "../../hooks/UseToggle";

export const AuthModalContext = createContext(null);

const AuthModalProvider = () => {
  const { showModal: LoginModal, toggleModal: toggleLogin } = useToggle();
  const { showModal: registerModal, toggleModal: toggleRegister } = useToggle();

  return (
    <AuthModalContext.Provider
      value={{ LoginModal, toggleLogin, registerModal, toggleRegister }}
    >
      <NavBar />
      <Login />
      <Register />
    </AuthModalContext.Provider>
  );
};

export default AuthModalProvider;
