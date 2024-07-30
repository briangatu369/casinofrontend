import Banner from "./assets/casionbanner.webp";
import Cover from "./assets/images/minesImages/cover.svg";
import Gold from "./assets/images/minesImages/gold.svg";
import useCheckAuth from "./hooks/useCheckAuth";
import AuthModalProvider from "./Pages/auth/AuthModal";
import Toaster from "./components/ToasterProvider";

function App() {
  useCheckAuth();

  return (
    <div className="max-w-[1100px] mx-auto">
      <Toaster />
      <AuthModalProvider />
      <div className="pt-2">
        <div>
          <div className="w-full h-52">
            <img
              src={Banner}
              alt="banner"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div>
          <img src={Cover} alt="cover" />
          <img src={Gold} alt="cover" />
        </div>
      </div>
    </div>
  );
}

export default App;
