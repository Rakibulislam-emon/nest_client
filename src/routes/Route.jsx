import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/product/detail/:id",
        element: <ProductDetailsPage />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/api/product-details/${params.id}`
          ),
      },
    ],
  },
]);
