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
import StripeProvider from "./providers/StripeProvider";
import { ClerkProvider } from '@clerk/clerk-react'

const queryClient = new QueryClient();


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
   

    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <>
            <StripeProvider>
              <RouterProvider router={route} />
            </StripeProvider>
          </>
        </QueryClientProvider>
        <Toaster />
      </PersistGate>
    </Provider>
    </ClerkProvider>
  </StrictMode>
);
