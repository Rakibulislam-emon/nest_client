import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { route } from "./routes/Route";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./redux/store";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
      <Toaster />
    </Provider>
  </StrictMode>
);
