import React from "react";
import GameCard from "./GameCard";

const AllGames = () => {
  const casinogames = [
    { gameId: 1, gameName: "mines", image: "" },
    { gameId: 2, gameName: "crush", image: "" },
    { gameId: 3, gameName: "rockpaperscissors", image: "" },
    { gameId: 4, gameName: "aviator", image: "" },
  ];

  return (
    <div className="my-5 pt-2">
      <div className="flex flex-wrap gap-4 gap-y-3 justify-center ">
        {casinogames.map((game) => {
          return <GameCard key={game?.gameId} game={game} />;
        })}
      </div>
    </div>
  );
};

export default AllGames;
