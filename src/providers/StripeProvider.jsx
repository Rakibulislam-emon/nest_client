/* eslint-disable react/prop-types */
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

// Get the key and add validation
const key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

// Log for debugging (remove in production)
console.log("Stripe key available:", !!key);

// Only attempt to load Stripe if key exists
const stripePromise = key ? loadStripe(key) : Promise.reject(new Error("Stripe key missing"));

export default function StripeProvider({ children }) {
  if (!key) {
    console.error("Stripe public key is missing. Check environment variables.");
  }
  
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
