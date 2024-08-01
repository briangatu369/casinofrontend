import React from "react";
import AuthModalProvider from "../auth/AuthModal";
import HomeBanner from "./HomeBanner";
import AllGames from "./AllGames";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AllGames />
    </div>
  );
};

export default Home;
