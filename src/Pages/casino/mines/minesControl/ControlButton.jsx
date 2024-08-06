import React, { useContext } from "react";
import { GiMiner } from "react-icons/gi";
import { minesContext } from "../minesProvider";
import { MINESACTION } from "../minesReducer";
import api from "../../../../../config/axiosConfig";
import { AuthenticationContext } from "../../../../../context/AuthenticationProvider";

const ControlButton = () => {
  const { minesState, minesDispatch } = useContext(minesContext);
  const { isGameActive, stake, bombs, isLoading } = minesState;
  const { userData, setUserData } = useContext(AuthenticationContext);

  const handleGame = async () => {
    try {
      const gameId = sessionStorage.getItem("minesId");
      if (isGameActive) {
        //cashOut
        const response = await api.post("/casino/mines/cashout", {
          gameId,
        });
        const data = response.data;
        const newAccountBalance = data.newAccountBalance;
        const betResults = data?.betInfo?.betDetails?.gameResults;
        setUserData({ ...userData, AccountBalance: newAccountBalance });
        minesDispatch({ type: MINESACTION.CASHOUT, payload: betResults });
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
    } finally {
      minesDispatch({ type: MINESACTION.TOGGLELOADING, loading: false });
    }
  };

  return (
    <div>
      <button
        disabled={isLoading}
        onClick={handleGame}
        className="btn btn-block bg-[#02b102] text-black capitalize text-base hover:bg-green transition-all "
      >
        {isLoading ? (
          "loading"
        ) : (
          <>
            <span>{isGameActive ? "Cashout" : "Bet"}</span>
            <span>
              <GiMiner size={20} />
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default ControlButton;
