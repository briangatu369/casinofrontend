import React from "react";
import minesBanner from "../../Pages/casino/mines/assets/minesBanner.webp";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <Link to={`/casino/${game?.gameName}`}>
      <div
        className="h-44  w-44 hover:cursor-pointer
                hover:-translate-y-2 transition-all duration-300 "
      >
        <div className="w-full h-full relative">
          <img
            src={minesBanner}
            alt="minesBanner"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <h4 className="capitalize text-white/70 text-sm text-center ">
          {game?.gameName}
        </h4>
      </div>
    </Link>
  );
};

export default GameCard;
