/* eslint-disable react/prop-types */
import {loadStripe} from '@stripe/stripe-js';

import { Elements } from "@stripe/react-stripe-js";

const key =
  "pk_test_51PLp1iHz2QiFJeQ8aGjZ7BeaBufr3OzuigPxvtNNHbTjc1Kiz6iLoj6gZM39TAeJLv0unG0vZwfMk9zQieJHjowL00lWevx0kB";
const stripePromise = loadStripe(key);

export default function StripeProvider({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
