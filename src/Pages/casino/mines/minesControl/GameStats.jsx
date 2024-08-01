import React from "react";

const GameStats = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex gap-2">
          <div>
            <h4 className="text-white/70 text-sm mb-1 font-medium">Bombs</h4>
            <input disabled value={22} className="text-sm" type="text" />
          </div>
          <div>
            <h4 className="text-white/70 text-sm mb-1 font-medium">Gems</h4>
            <input disabled value={22} className="text-sm" type="text" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-between ">
            <h4 className="text-white/70 text-sm mb-1 font-medium">
              Total profit(23*)
            </h4>
            <h4 className="text-white/70 text-sm mb-1 font-medium">3000</h4>
          </div>
          <input disabled className="" type="text" />
        </div>
      </div>
    </div>
  );
};

export default GameStats;
