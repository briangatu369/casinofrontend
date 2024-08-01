import React, { useState } from "react";
import GridElement from "./GridElement";

const generateRamdomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 2);
  return randomNumber;
};

const MinesGrid = () => {
  const initialGridStatus = new Array(25).fill(null);
  const [minesGridStatus, setMinesGridStatus] = useState(initialGridStatus);

  return (
    <div>
      <div className="w-full lg:w-[410px] ">
        <div className="grid grid-cols-5 gap-2">
          {minesGridStatus.map((status, index) => {
            const randomNumber = generateRamdomNumber();
            return <GridElement key={index} status={randomNumber} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MinesGrid;
