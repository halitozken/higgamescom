import { createBrowserRouter } from "react-router-dom";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";
import App from "./App";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/games",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/:id",
    element: <Game />,
    errorElement: <NotFound />,
  },
]);
