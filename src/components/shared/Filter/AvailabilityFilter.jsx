/* eslint-disable react/prop-types */

const AvailabilityFilter = ({ availability, setAvailability }) => {
  return (
    <div className=" p-4 ">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Availability</h2>
      <ul className="space-y-3">
        {/* In Stock Option */}
        <li className="flex items-center space-x-3">
          <input
            type="radio"
            name="availability"
            value="In Stock"
            checked={availability === "In Stock"}
            onChange={() => setAvailability("In Stock")}
            className="form-radio h-5 w-5 text-green-600 focus:ring-2 focus:ring-green-400"
          />
          <label htmlFor="in-stock" className="text-gray-700 font-medium">
            In Stock
          </label>
        </li>
        {/* Out of Stock Option */}
        <li className="flex items-center space-x-3">
          <input
            type="radio"
            name="availability"
            value="Out of Stock"
            checked={availability === "Out of Stock"}
            onChange={() => setAvailability("Out of Stock")}
            className="form-radio h-5 w-5 text-red-600 focus:ring-2 focus:ring-red-400"
          />
          <label htmlFor="out-of-stock" className="text-gray-700 font-medium">
            Out of Stock
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AvailabilityFilter;
