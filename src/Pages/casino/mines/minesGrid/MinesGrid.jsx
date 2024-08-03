import React, { useEffect, useState } from "react";
import GridElement from "./GridElement";

const generateRamdomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 2);
  return randomNumber;
};

const MinesGrid = () => {
  const initialGridStatus = new Array(25).fill(0);

  const [minesGridStatus, setMinesGridStatus] = useState(initialGridStatus);

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < 25; i++) {
      const randomNumber = generateRamdomNumber();
      newArray.push(randomNumber);
    }
    setMinesGridStatus(newArray);
  }, []);

  return (
    <div>
      <div className="w-full lg:w-[410px] ">
        <div className="grid grid-cols-5 gap-2">
          {minesGridStatus.map((status, index) => {
            const randomNumber = generateRamdomNumber();
            return <GridElement key={index} status={status} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MinesGrid;
