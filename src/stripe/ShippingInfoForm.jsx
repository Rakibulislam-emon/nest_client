/* eslint-disable react/prop-types */
const ShippingInfoForm = ({ shippingInfo, handleChange }) => {
    return (
      <div>
        <h2 className="text-xl font-bold text-gray-800">Shipping info</h2>
        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          <div>
            <input
            required
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleChange}
              placeholder="Name"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <input
            required
              type="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleChange}
              placeholder="Email address"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <input
            required
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleChange}
              placeholder="Street address"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <input
            required
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleChange}
              placeholder="City"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <input
            required
              type="text"
              name="state"
              value={shippingInfo.state}
              onChange={handleChange}
              placeholder="State"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <input
            required
              type="number"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleChange}
              placeholder="Postal code"
              className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ShippingInfoForm;