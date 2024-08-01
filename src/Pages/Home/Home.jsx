import React from "react";
import AuthModalProvider from "../auth/AuthModal";
import HomeBanner from "./HomeBanner";
import AllGames from "./AllGames";

const Home = () => {
  return (
    <div className="w-full md:max-w-[800px] mx-auto px-3 md:px-0 ">
      <AuthModalProvider />
      <HomeBanner />
      <AllGames />
    </div>
  );
};

export default Home;
