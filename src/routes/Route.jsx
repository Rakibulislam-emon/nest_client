import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import ShopPage from "../pages/Shop/ShopPage";
import MyAccount from "../authentication/MyAccount";
import Cart from "../pages/Cart/Cart";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <ShopPage /> },
      {
        path: "/product/detail/:id",
        element: <ProductDetailsPage />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/api/product-details/${params.id}`
          ),
      },
      {
        path:'/authentications',
        element: <MyAccount/>
      },
      {
        path:'/cart',
        element: <Cart/>
      },
    ],
  },
]);
