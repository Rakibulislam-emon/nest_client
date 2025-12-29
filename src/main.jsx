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
import { ClerkProvider } from "@clerk/clerk-react";

const queryClient = new QueryClient();

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <>
              <StripeProvider>
                <RouterProvider router={route} />
              </StripeProvider>
            </>
          </QueryClientProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "rgba(23, 23, 23, 0.85)",
                color: "#fff",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "1rem",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Outfit', sans-serif",
                padding: "16px 24px",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              },
              success: {
                iconTheme: {
                  primary: "#22c55e",
                  secondary: "#fff",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#fff",
                },
              },
            }}
          />
        </PersistGate>
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
