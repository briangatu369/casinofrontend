import React, { useContext } from "react";
import { minesContext } from "../minesProvider";
import { MINESACTION } from "../minesReducer";

const BombPicker = () => {
  const { minesState, minesDispatch } = useContext(minesContext);

  //bomb picker array
  let count = 24;
  const bombsArray = [];
  for (let i = 1; i <= count; i++) {
    bombsArray.push(i);
  }

  const updateNumberOfBombs = (value) => {
    minesDispatch({ type: MINESACTION.UPDATEBOMBS, bombs: Number(value) });
  };

  return (
    <div>
      <h4 className="text-white/70 text-sm mb-1 font-medium">Bombs</h4>
      <select
        value={minesState.bombs}
        onChange={(e) => updateNumberOfBombs(e.target.value)}
        className="select select-success w-full bg-mainbgColor focus:outline-green focus:outline-1 border-none"
      >
        {bombsArray.map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BombPicker;
