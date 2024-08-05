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
import api from "../../../../../config/axiosConfig";

const GridElement = ({ index, value }) => {
  const [isClicked, setisClicked] = useState(false);
  const { minesState, minesDispatch } = useContext(minesContext);
  const { isGameActive, isBusted, payout } = minesState;

  const placeBet = async () => {
    if (!isGameActive) {
      return toast.info("Please start the game");
    }

    setisClicked(true);

    const gameId = sessionStorage.getItem("minesId");

    //logic
    const response = await api.post("/casino/mines/placebet", {
      gameId,
      index,
    });
    const gameData = response.data;
    const { betDetails } = gameData;
    const { multiplier, payout, isBusted: BUSTED, gameResults } = betDetails;

    if (BUSTED) {
      new Audio(BustedSound).play();
      setisClicked(true);
      minesDispatch({ type: MINESACTION.ISBUSTED, payload: gameResults });
      sessionStorage.removeItem("minesId");
      return;
    }

    new Audio(WinSound).play();
    minesDispatch({
      type: MINESACTION.CORRECTPICK,
      multiplier,
      payout,
      payload: gameResults,
    });
    setisClicked(true);

    //     {
    //     "_id": "66af6aeb70eac182c8befd67",
    //     "userId": "66af5dcb70eac182c8befd36",
    //     "gameType": "mines",
    //     "betDetails": {
    //         "stake": 5,
    //         "bombs": 3,
    //         "multiplier": 1.1363636363636365,
    //         "payout": 5.6818181818181825,
    //         "AccountBalance": 100000,
    //         "hasMined": false,
    //         "isBusted": false,
    //         "hasCashedout": false,
    //         "tilesOpened": 1,
    //         "indexOpened": [
    //             0
    //         ],
    //         "gameResults": [
    //             1,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0,
    //             0
    //         ],
    //         "_id": "66af6aeb70eac182c8befd66"
    //     },
    //     "__v": 0
    // }
  };

  useEffect(() => {
    if (payout === 0 && !isGameActive) {
      setisClicked(false);
    }
  }, [payout, isGameActive]);

  return (
    <div>
      {isClicked || isBusted ? (
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
