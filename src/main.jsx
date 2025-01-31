import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { route } from "./routes/Route";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProviders from "./providers/AuthProviders";
import StripeProvider from "./providers/StripeProvider";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <AuthProviders>
            <StripeProvider>
              <RouterProvider router={route} />
            </StripeProvider>
          </AuthProviders>
        </QueryClientProvider>
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>
);
