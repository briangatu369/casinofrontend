import React from "react";
import MinesControl from "./minesControl/MinesControls";
import MinesGrid from "./minesGrid/MinesGrid";
import MinesProvider from "./minesProvider";

const Mines = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 p-2">
      <MinesProvider>
        <MinesControl />
        <MinesGrid />
      </MinesProvider>
    </div>
  );
};

export default Mines;
