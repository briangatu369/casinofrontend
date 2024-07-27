import { useState } from "react";
import Banner from "./assets/casionbanner.webp";
import NavBar from "./components/NavBar";
import Login from "./Pages/auth/Login/Login";
import useToggle from "./hooks/UseToggle";

function App() {
  const { showModal: LoginModal, toggleModal: toggleLogin } = useToggle();

  return (
    <div>
      <NavBar LoginModal={LoginModal} toggleLogin={toggleLogin} />
      <Login LoginModal={LoginModal} toggleLogin={toggleLogin} />
    </div>
  );
}

export default App;
