import Banner from "./assets/casionbanner.webp";
import Bomb from "./assets/images/mines/bomb.webp";
import Cash from "./assets/images/mines/cash.webp";
import minesBanner from "./assets/images/mines/minesBanner.webp";

import useCheckAuth from "./hooks/useCheckAuth";
import AuthModalProvider from "./Pages/auth/AuthModal";
import Toaster from "./components/ToasterProvider";

function App() {
  useCheckAuth();

  const casinogames = [
    { gameId: 1, gameName: "mines", image: "" },
    { gameId: 2, gameName: "rockpaperscissors", image: "" },
    { gameId: 2, gameName: "rockpaperscissors", image: "" },
    { gameId: 2, gameName: "rockpaperscissors", image: "" },
  ];

  return (
    <div className=" w-full md:max-w-[800px] mx-auto px-3 md:px-0 ">
      <Toaster />
      <AuthModalProvider />
      <div className="">
        <div className="pt-2">
          <div>
            <div className="w-full">
              <img
                src={Banner}
                alt="banner"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="my-5">
            <div className="flex flex-wrap gap-4 gap-y-3 justify-center ">
              {casinogames.map((game) => {
                return (
                  <div
                    key={game?.gameId}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
