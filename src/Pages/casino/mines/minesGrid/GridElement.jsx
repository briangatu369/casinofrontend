import React, { useContext, useEffect, useState, useCallback } from "react";
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
import { motion } from "framer-motion";

const GridElement = ({ index, value }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { minesState, minesDispatch } = useContext(minesContext);
  const { isGameActive, isBusted, payout, hasCashedout } = minesState;

  const playSound = (sound) => {
    new Audio(sound).play();
  };

  const placeBet = useCallback(async () => {
    if (!isGameActive) {
      return toast.info("Please start the game");
    }

    setIsLoading(true);
    setIsClicked(true);
    const gameId = sessionStorage.getItem("minesId");

    try {
      const response = await api.post("/casino/mines/placebet", {
        gameId,
        index,
      });
      const { betDetails } = response.data;
      const {
        multiplier,
        payout,
        isBusted: BUSTED,
        gameResults,
        hasCashedout: GRIDCOMPLETED,
      } = betDetails;

      if (BUSTED) {
        playSound(BustedSound);
        minesDispatch({ type: MINESACTION.ISBUSTED, payload: gameResults });
        sessionStorage.removeItem("minesId");
        return;
      }

      if (GRIDCOMPLETED) {
        playSound(Cashout);
        minesDispatch({ type: MINESACTION.CASHOUT, payload: gameResults });
        sessionStorage.removeItem("minesId");
        return;
      }

      playSound(WinSound);
      minesDispatch({
        type: MINESACTION.CORRECTPICK,
        multiplier,
        payout,
        payload: gameResults,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [index, isGameActive, minesDispatch]);

  useEffect(() => {
    if (payout === 0 && !isGameActive) {
      setIsClicked(false);
    }
  }, [payout, isGameActive]);

  return (
    <>
      {isLoading ? (
        <div className={twMerge("bg-gray-700")}></div>
      ) : isClicked || isBusted || hasCashedout ? (
        <div
          className={twMerge(
            "w-16 h-16 md:w-20 md:h-20 flex justify-center items-center bg-bgColor1 rounded-md"
          )}
        >
          <img
            src={value === 1 ? Diamond : value === 0 ? Bomb : Cover}
            alt={value === 1 ? "Diamond" : value === 0 ? "Bomb" : "Covered"}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      ) : (
        <button
          onClick={placeBet}
          className={twMerge(
            "bg-gray-700 w-16 h-16 md:w-20 md:h-20 rounded-md"
          )}
        ></button>
      )}
    </>
  );
};

export default GridElement;
