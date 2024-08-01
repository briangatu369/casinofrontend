import React, { useContext } from "react";
import { GiMiner } from "react-icons/gi";
import { minesContext } from "../minesProvider";

const ControlButton = () => {
  const startMining = () => {};

  const cashOut = () => {};

  return (
    <div>
      <button className="btn btn-block bg-[#02b102] text-black capitalize text-base hover:bg-green transition-all ">
        <span>Bet</span>
        <span>
          <GiMiner size={20} />
        </span>
      </button>
    </div>
  );
};

export default ControlButton;
