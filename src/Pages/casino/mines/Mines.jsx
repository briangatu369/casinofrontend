import React, { useContext } from "react";
import MinesControl from "./minesControl/MinesControls";
import MinesGrid from "./minesGrid/MinesGrid";
import MinesProvider from "./minesProvider";
import { AuthenticationContext } from "../../../../context/AuthenticationProvider";

const Mines = () => {
  const { isAuthenticated, userData, setUserData } = useContext(
    AuthenticationContext
  );
  const { AccountBalance } = userData;

  return (
    <MinesProvider>
      <div className="flex justify-end">
        {isAuthenticated && (
          <div className=" bg-[#3C5233] tracking-wider  font-medium text-[14px] py-2 px-3 rounded-md flex gap-2 items-center">
            <span className="">Wallet:</span>
            <span className="">${AccountBalance}</span>
          </div>
        )}
      </div>
      <div className="flex pt-1 pb-3 flex-col-reverse items-center mx-auto gap-3 max-w-[470px] mt-5 lg:items-stretch lg:flex-row lg:max-w-full">
        <MinesControl />
        <MinesGrid />
      </div>
    </MinesProvider>
  );
};

export default Mines;
