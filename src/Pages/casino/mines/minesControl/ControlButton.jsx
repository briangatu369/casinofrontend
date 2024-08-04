import React, { useContext } from "react";
import { GiMiner } from "react-icons/gi";
import { minesContext } from "../minesProvider";
import { MINESACTION } from "../minesReducer";
import api from "../../../../../config/axiosConfig";

const ControlButton = () => {
  const { minesState, minesDispatch } = useContext(minesContext);
  const { isGameActive, stake, bombs } = minesState;

  const handleGame = async () => {
    try {
      if (isGameActive) {
        //cashOut
        minesDispatch({ type: MINESACTION.CASHOUT });
      } else {
        //start the game
        const response = await api.post("/casino/mines/startgame", {
          stake,
          bombs,
        });
        const gameResults = response.data.betDetails.gameResults;
        const minesId = response.data._id;
        sessionStorage.setItem("minesId", minesId);
        minesDispatch({ type: MINESACTION.STARTGAME, payload: gameResults });
      }
    } catch (error) {
      console.error(error);
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
