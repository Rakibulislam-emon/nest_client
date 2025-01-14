const OrderSummary = ({ subtotal, shipping, tax, total }) => {
    return (
      <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-4">Order Summary</h3>
  
        <ul className="text-gray-800 divide-y mt-4">
          <li className="flex flex-wrap gap-4 text-sm py-3">
            Subtotal <span className="ml-auto font-bold">${subtotal}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm py-3">
            Shipping <span className="ml-auto font-bold">${shipping}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm py-3">
            Tax <span className="ml-auto font-bold">${tax}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm py-3 font-bold">
            Total <span className="ml-auto">${total}</span>
          </li>
        </ul>
  
        <button
          type="button"
          className="mt-4 text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Make Payment
        </button>
      </div>
    );
  };
  
  export default OrderSummary;
  