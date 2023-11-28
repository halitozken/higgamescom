import { createBrowserRouter } from "react-router-dom";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";
import App from "./App";
import GamesByCategoryAndPage from "./pages/GamesByCategoryAndPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/:category/:page",
    element: <GamesByCategoryAndPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/games/:Md5",
    element: <Game />,
    errorElement: <NotFound />,
  },
]);
