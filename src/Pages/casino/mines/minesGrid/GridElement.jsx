import React, { useState } from "react";
import Diamond from "../assets/diamond.svg";
import Bomb from "../assets/bomb.svg";

const GridElement = ({ status }) => {
  const [hasClicked, setHasClicked] = useState(false);
  const correctGrid = hasClicked && status === 1;
  const wrongGrid = hasClicked && status === 0;
  const waiting = !hasClicked;

  const displayOutcome = correctGrid ? Diamond : wrongGrid ? Bomb : "closed";

  return (
    <div>
      <button
        disabled={!hasClicked}
        className="bg-bgColor1 w-full h-full p-3 rounded-lg"
      >
        {hasClicked ? (
          <img
            src={displayOutcome}
            alt=""
            className="w-[90%] h-[90%] object-contain "
          />
        ) : (
          "closed"
        )}
      </button>
    </div>
  );
};

export default GridElement;
