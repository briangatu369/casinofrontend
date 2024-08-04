import React, { useContext, useEffect, useState } from "react";
import GridElement from "./GridElement";
import { minesContext } from "../minesProvider";

const MinesGrid = () => {
  const { minesState } = useContext(minesContext);
  const { minesGame } = minesState;

  return (
    <div>
      <div className="w-full lg:w-[410px] ">
        <div className="grid grid-cols-5 gap-2">
          {minesGame?.map((value, index) => {
            return <GridElement key={index} index={index} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MinesGrid;
