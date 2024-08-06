import React, { useContext, useEffect, useState } from "react";
import GridElement from "./GridElement";
import { minesContext } from "../minesProvider";

const MinesGrid = () => {
  const { minesState } = useContext(minesContext);
  const { minesGame } = minesState;

  return (
    <div className=" grid grid-cols-5 gap-3 rounded-md ">
      {minesGame?.map((value, index) => {
        return <GridElement key={index} index={index} value={value} />;
      })}
    </div>
  );
};

export default MinesGrid;
