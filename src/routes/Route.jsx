import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
