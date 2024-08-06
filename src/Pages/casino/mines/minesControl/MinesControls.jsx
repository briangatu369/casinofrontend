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
    <div className="w-full lg:w-[40%] flex flex-col gap-3 bg-gray-800 py-2 px-3 rounded-md">
      <StakeInput />
      {isGameActive && <GameStats />}
      <BombPicker />
      <ControlButton />
    </div>
  );
};

export default MinesControl;
