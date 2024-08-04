import React, { useContext } from "react";
import { minesContext } from "../minesProvider";

const GameStats = () => {
  const { minesState } = useContext(minesContext);
  const { multiplier, payout, stake, bombs } = minesState;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex gap-2">
          <div>
            <h4 className="text-white/70 text-sm mb-1 font-medium">Bombs</h4>
            <input disabled value={bombs} className="text-sm" type="text" />
          </div>
          <div>
            <h4 className="text-white/70 text-sm mb-1 font-medium">Gems</h4>
            <input
              disabled
              value={25 - bombs}
              className="text-sm"
              type="text"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-between ">
            <h4 className="text-white/70 text-sm mb-1 font-medium flex gap-1">
              <span>Total Profit</span>
              <span className="text-white">({multiplier}*)</span>
            </h4>
            <h4 className="text-white/70 text-sm mb-1 font-medium">{stake}</h4>
          </div>
          <input disabled className="" type="text" value={payout} />
        </div>
      </div>
    </div>
  );
};

export default GameStats;
