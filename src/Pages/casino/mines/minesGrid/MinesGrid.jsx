import React, { useState } from "react";
import GridElement from "./GridElement";

const MinesGrid = () => {
  const initialGridStatus = new Array(25).fill(null);
  const [minesGridStatus, setMinesGridStatus] = useState(initialGridStatus);

  return (
    <div>
      <div className="w-full lg:w-[410px] ">
        <div className="grid grid-cols-5 gap-2">
          {minesGridStatus.map((status, index) => {
            return <GridElement key={index} status={status} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MinesGrid;
