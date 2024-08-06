import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { AuthenticationContext } from "../../context/AuthenticationProvider";
import { AuthModalContext } from "../Pages/auth/AuthModal";

const NavBar = () => {
  const { isAuthenticated, userData } = useContext(AuthenticationContext);
  const { toggleLogin, toggleRegister } = useContext(AuthModalContext);
  const { AccountBalance, email } = userData;

  return (
    <div className="flex justify-between items-center py-4 h-16">
      <div className="w-24">
        <div className="w-full">
          <img src={Logo} alt="logo" className="w-full  object-contain" />
        </div>
      </div>

      <div>
        {isAuthenticated ? (
          <div className="italic">
            <span>{email}</span>
          </div>
        ) : (
          <div className="flex gap-6 ">
            <button
              onClick={toggleLogin}
              className="text-green text-sm tracking-wide font-medium"
            >
              Login
            </button>
            <button
              onClick={toggleRegister}
              className="bg-green text-white rounded-md px-2 py-1 text-sm  font-medium "
            >
              <span>Register</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
