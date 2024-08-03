import React, { useContext } from "react";
import { GiMiner } from "react-icons/gi";
import { minesContext } from "../minesProvider";
import { MINESACTION } from "../minesReducer";

const ControlButton = () => {
  const { minesState, minesDispatch } = useContext(minesContext);
  const { isGameActive } = minesState;

  const handleGame = () => {
    if (isGameActive) {
      //cashOut
      minesDispatch({ type: MINESACTION.CASHOUT });
    } else {
      minesDispatch({ type: MINESACTION.STARTGAME });
    }
  };

  return (
    <div>
      <button
        onClick={handleGame}
        className="btn btn-block bg-[#02b102] text-black capitalize text-base hover:bg-green transition-all "
      >
        <span>{isGameActive ? "Cashout" : "Bet"}</span>
        <span>
          <GiMiner size={20} />
        </span>
      </button>
    </div>
  );
};

export default ControlButton;
