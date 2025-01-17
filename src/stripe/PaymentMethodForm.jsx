/* eslint-disable react/prop-types */
import { CardElement } from "@stripe/react-stripe-js";

const PaymentMethodForm = ({ loading, totalPrice,stripe,clientSecret, paymentSuccess }) => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-gray-800">Payment method</h2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <div className="flex items-center">
          <input
            type="radio"
            className="w-5 h-5 cursor-pointer"
            id="card"
            defaultChecked
          />
          <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
            <img
              src="https://readymadeui.com/images/visa.webp"
              className="w-12"
              alt="card1"
            />
            <img
              src="https://readymadeui.com/images/american-express.webp"
              className="w-12"
              alt="card2"
            />
            <img
              src="https://readymadeui.com/images/master.webp"
              className="w-12"
              alt="card3"
            />
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            disabled
            className="w-5 h-5 cursor-pointer"
            id="paypal"
          />
          <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
            <img
              src="https://readymadeui.com/images/paypal.webp"
              className="w-20"
              alt="paypalCard"
            />
          </label>
        </div>
      </div>
      <div className="grid gap-8 mt-8">
        <div>
          <input
            type="text"
            placeholder="Cardholder's Name"
            className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
          />
        </div>
        <div className="flex bg-white border-b focus-within:border-blue-600 overflow-hidden">
          <CardElement className="px-2 pb-2 bg-white text-gray-800 w-full text-sm outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <input
              required
              type="number"
              placeholder="EXP."
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <input
              type="number"
              required
              placeholder="CVV"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
          required
            type="checkbox"
            id="remember-me"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />

          <label htmlFor="remember-me" className="ml-3 block text-sm">
            I accept the{" "}
            <a className="text-blue-600 font-semibold hover:underline ml-1">
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <button
          type="button"
          className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={paymentSuccess || !stripe || loading || clientSecret}

          className={`min-w-[150px] px-6 py-3.5 text-sm text-white rounded-lg ${
            loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading
            ? "Processing..."
            : `Confirm payment $${totalPrice.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
