import { Navigate, createBrowserRouter } from "react-router-dom";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/games" replace />,
  },
  {
    path: "/games",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/games/:slug",
    element: <Game />,
    errorElement: <NotFound />,
  },
]);
