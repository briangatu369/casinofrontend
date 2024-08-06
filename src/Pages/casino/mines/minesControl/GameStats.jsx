import React, { useContext } from "react";
import { minesContext } from "../minesProvider";

const GameStats = () => {
  const { minesState } = useContext(minesContext);
  const { multiplier, payout, stake, bombs } = minesState;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex gap-2">
          <div className="flex-1">
            <h4 className="text-white/70 text-sm mb-1 font-medium">Bombs</h4>
            <div className="flex items-center p-3 text-white text-sm font-semibold bg-mainbgColor w-full rounded-md h-10">
              {bombs}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-white/70 text-sm mb-1 font-medium">Gems</h4>
            <div className="flex items-center p-3 text-white text-sm font-semibold bg-mainbgColor w-full rounded-md h-10">
              {25 - bombs}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex justify-between ">
            <h4 className="text-white/70 text-sm mb-1 font-medium flex gap-1">
              <span>Total Profit</span>
              <span className="text-yellow-500 font-semibold text-sm flex  items-center">
                (<span>{multiplier}</span>
                <span className="text-xs">x</span>)
              </span>
            </h4>
            <h4 className="text-white/70 text-sm mb-1 font-semibold text-yellow-500">
              ${stake}
            </h4>
          </div>
          <div className="flex items-center p-3 text-yellow-500 text-sm font-semibold bg-mainbgColor w-full rounded-md h-10">
            {payout}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;
