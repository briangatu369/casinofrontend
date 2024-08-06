import useCheckAuth from "./hooks/useCheckAuth";
import Toaster from "./components/ToasterProvider";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mines from "./Pages/casino/mines/Mines";
import AuthModalProvider from "./Pages/auth/AuthModal";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/casino/mines", element: <Mines /> },
]);

function App() {
  useCheckAuth();

  return (
    <div className="w-[100vw] md:max-w-[800px] mx-auto px-3 ">
      <AuthModalProvider />
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
