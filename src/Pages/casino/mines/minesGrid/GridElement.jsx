import React, { useContext, useEffect, useState } from "react";
import Diamond from "../assets/diamond.svg";
import Bomb from "../assets/bomb.svg";
import Cover from "../assets/cover.webp";
import { twMerge } from "tailwind-merge";
import { minesContext } from "../minesProvider";
import { toast } from "sonner";

const GridElement = ({ status }) => {
  const [isClicked, setisClicked] = useState(false);

  const hasCorrectPick = isClicked && status === 1;
  const displayOutCome = hasCorrectPick ? Diamond : Bomb;

  const placeBet = () => {};

  return (
    <div>
      {isClicked ? (
        <div className={twMerge("bg-bgColor1 w-full h-full p-3 rounded-lg")}>
          <img
            src={displayOutCome}
            alt=""
            className="w-[90%] h-[90%] object-contain "
          />
        </div>
      ) : (
        <button className={twMerge("bg-gray-700 w-full h-full p-3 rounded-lg")}>
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
