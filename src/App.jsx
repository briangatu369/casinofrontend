import useCheckAuth from "./hooks/useCheckAuth";
import Toaster from "./components/ToasterProvider";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mines from "./Pages/casino/mines/Mines";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/casino/mines", element: <Mines /> },
]);

function App() {
  useCheckAuth();

  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
