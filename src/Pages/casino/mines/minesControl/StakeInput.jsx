import React, { useContext } from "react";
import { MINESACTION } from "../minesReducer";
import { minesContext } from "../minesProvider";

const StakeInput = () => {
  const { minesState, minesDispatch } = useContext(minesContext);

  const updateStake = (value) => {
    minesDispatch({ type: MINESACTION.UPDATESTAKE, stake: Number(value) });
  };

  return (
    <div>
      <h4 className="text-white/70 text-sm mb-1 font-medium">Stake</h4>
      <input
        value={minesState?.stake}
        onChange={(e) => updateStake(e.target.value)}
        type="number"
        className=" bg-mainbgColor text-sm"
      />
    </div>
  );
};

export default StakeInput;
