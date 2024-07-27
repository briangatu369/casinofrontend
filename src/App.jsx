import { useState } from "react";
import Banner from "./assets/casionbanner.webp";
import NavBar from "./components/NavBar";
import { Toaster, toast } from "sonner";
import Login from "./Pages/auth/Login/Login";
import useToggle from "./hooks/UseToggle";
import Cookies from "js-cookie";
import Register from "./Pages/auth/Register/Register";

function App() {
  const { showModal: LoginModal, toggleModal: toggleLogin } = useToggle();
  const { showModal: registerModal, toggleModal: toggleRegister } = useToggle();

  return (
    <div>
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          style: {
            padding: 8,
          },
          className: "class",
        }}
      />
      <NavBar
        LoginModal={LoginModal}
        toggleLogin={toggleLogin}
        registerModal={registerModal}
        toggleRegister={toggleRegister}
      />
      <Login
        LoginModal={LoginModal}
        toggleLogin={toggleLogin}
        toggleRegister={toggleRegister}
      />
      <Register
        registerModal={registerModal}
        toggleRegister={toggleRegister}
        toggleLogin={toggleLogin}
      />
    </div>
  );
}

export default App;
