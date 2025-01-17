/* eslint-disable react/prop-types */
const OrderSummary = ({ products, totalPrice }) => {
    return (
      <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0 lg:max-w-[430px] w-full lg:ml-auto">
        <div className="relative h-full">
          <div className="p-6 overflow-auto max-lg:max-h-[450px] lg:h-[calc(100vh-50px)]">
            <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
            <div className="space-y-6 mt-8">
              {products.map((product) => (
                <div key={product._id} className="flex gap-4">
                  <div className="w-[124px] h-[100px] flex items-center justify-center p-4 shrink-0 bg-gray-200 rounded-lg">
                    <img src={product.image} className="w-full object-contain" alt={product.name} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-sm text-gray-800 font-bold">{product.name}</h3>
                    <ul className="text-xs text-gray-800 space-y-1 mt-2">
                      <li className="flex flex-wrap gap-4">
                        Size <span className="ml-auto">37</span>
                      </li>
                      <li className="flex flex-wrap gap-4">
                        Quantity <span className="ml-auto">{product.quantity}</span>
                      </li>
                      <li className="flex flex-wrap gap-4">
                        Total Price <span className="ml-auto">${(product.price * product.quantity).toFixed(2)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-sm text-gray-800 font-bold">
                Total <span className="ml-auto">${totalPrice.toFixed(2)}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;