import React, { useContext } from "react";
import StakeInput from "./StakeInput";
import GameStats from "./GameStats";
import BombPicker from "./BombPicker";
import ControlButton from "./ControlButton";
import { minesContext } from "../minesProvider";

const MinesControl = () => {
  const { minesState } = useContext(minesContext);
  const { isGameActive } = minesState;

  return (
    <div className="w-full lg:max-w-64 flex flex-col gap-4 bg-slate-800 p-4 rounded-sm">
      <StakeInput />
      {minesState?.isGameActive && <GameStats />}
      <BombPicker />
      <ControlButton />
    </div>
  );
};

export default MinesControl;
