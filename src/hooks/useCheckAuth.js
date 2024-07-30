import { useContext, useEffect } from "react";
import api from "../../config/axiosConfig";
import { AuthenticationContext } from "../../context/AuthenticationProvider";

const useCheckAuth = async () => {
  const { setIsAuthenticated, setUserData } = useContext(AuthenticationContext);

  const checkIfAuthenticated = async () => {
    try {
      const response = await api.get("/auth/validatetoken");
      const userInfo = response.data;
      setIsAuthenticated(true);
      setUserData(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfAuthenticated();
  }, []);
};

export default useCheckAuth;
