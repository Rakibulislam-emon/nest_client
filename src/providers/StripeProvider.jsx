/* eslint-disable react/prop-types */
import {loadStripe} from '@stripe/stripe-js';

import { Elements } from "@stripe/react-stripe-js";

// Fix the environment variable reference
const key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(key);

export default function StripeProvider({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
