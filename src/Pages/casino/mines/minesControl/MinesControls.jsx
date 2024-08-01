import React from "react";
import StakeInput from "./StakeInput";
import GameStats from "./GameStats";
import BombPicker from "./BombPicker";
import ControlButton from "./ControlButton";

const MinesControl = () => {
  return (
    <div className="w-full lg:max-w-64 flex flex-col gap-4 bg-slate-800 p-4 rounded-sm">
      <StakeInput />
      <GameStats />
      <BombPicker />
      <ControlButton />
    </div>
  );
};

export default MinesControl;
