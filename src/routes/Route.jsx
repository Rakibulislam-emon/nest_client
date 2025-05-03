import { createBrowserRouter } from "react-router";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import ShopPage from "../pages/Shop/ShopPage";
import Cart from "../pages/Cart/Cart";
import CheckoutForm from "../stripe/CheckoutForm";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import CategoryPage from "../pages/Blog/CategoryPage";
import Contact from "../pages/Contact/Contact";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogDetail /> },
      { path: "/blog/category/:category", element: <CategoryPage /> },
      { path: "/contact", element: <Contact /> },
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
