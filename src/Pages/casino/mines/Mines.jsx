import React from "react";
import MinesControl from "./minesControl/MinesControls";
import MinesGrid from "./minesGrid/MinesGrid";

const Mines = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 p-2">
      <MinesControl />
      <MinesGrid />
    </div>
  );
};

export default Mines;
