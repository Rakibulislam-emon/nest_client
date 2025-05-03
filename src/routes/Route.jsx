import { createBrowserRouter } from "react-router";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import ShopPage from "../pages/Shop/ShopPage";
import Cart from "../pages/Cart/Cart";
import CheckoutForm from "../stripe/CheckoutForm";

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
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: (
          <>
            <SignedIn>
              <CheckoutForm />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )
      }
    ],
  },
]);
