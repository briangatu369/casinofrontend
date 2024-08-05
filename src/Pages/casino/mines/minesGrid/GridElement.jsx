import React, { useContext, useEffect, useState } from "react";
import Diamond from "../assets/diamond.svg";
import Bomb from "../assets/bomb.svg";
import Cover from "../assets/cover.webp";
import { twMerge } from "tailwind-merge";
import { minesContext } from "../minesProvider";
import { toast } from "sonner";
import { MINESACTION } from "../minesReducer";
import WinSound from "../assets/winsound.wav";
import BustedSound from "../assets/gameoversound.wav";
import Cashout from "../assets/cashoutsound.wav";
import api from "../../../../../config/axiosConfig";

const GridElement = ({ index, value }) => {
  const [isClicked, setisClicked] = useState(false);
  const { minesState, minesDispatch } = useContext(minesContext);
  const { isGameActive, isBusted, payout, hasCashedout } = minesState;

  const placeBet = async () => {
    //game has non started
    if (!isGameActive) {
      return toast.info("Please start the game");
    }

    setisClicked(true);
    const gameId = sessionStorage.getItem("minesId");

    try {
      const response = await api.post("/casino/mines/placebet", {
        gameId,
        index,
      });

      const gameData = response.data;
      const { betDetails } = gameData;
      const {
        multiplier,
        payout,
        isBusted: BUSTED,
        gameResults,
        hasCashedout: GRIDCOMPLETED,
      } = betDetails;

      const voiceEffect = BUSTED
        ? BustedSound
        : GRIDCOMPLETED
        ? Cashout
        : WinSound;
      new Audio(voiceEffect).play();

      if (BUSTED) {
        minesDispatch({ type: MINESACTION.ISBUSTED, payload: gameResults });
        sessionStorage.removeItem("minesId");
        return;
      }

      if (GRIDCOMPLETED) {
        minesDispatch({ type: MINESACTION.CASHOUT, payload: gameResults });
        sessionStorage.removeItem("minesId");
        return;
      }

      // continue the game
      minesDispatch({
        type: MINESACTION.CORRECTPICK,
        multiplier,
        payout,
        payload: gameResults,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //restart the game
    if (payout === 0 && !isGameActive) {
      setisClicked(false);
    }
  }, [payout, isGameActive]);

  return (
    <div>
      {isClicked || isBusted || hasCashedout ? (
        <div className={twMerge("bg-bgColor1 w-full h-full p-3 rounded-lg")}>
          <img
            src={value === 1 ? Diamond : Bomb}
            alt=""
            className="w-[90%] h-[90%] object-contain "
          />
        </div>
      ) : (
        <button
          onClick={placeBet}
          className={twMerge("bg-gray-700 w-full h-full p-3 rounded-lg")}
        >
          <img
            src={Cover}
            alt="minesCover"
            className="w-[90%] h-[90%] object-contain "
          />
        </button>
      )}
    </div>
  );
};

export default GridElement;
