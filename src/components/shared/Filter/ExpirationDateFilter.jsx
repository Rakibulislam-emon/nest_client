/* eslint-disable react/prop-types */

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ExpirationDateFilter = ({ minDate, setMinDate }) => {
  return (
    <div className="p-4 ">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Expiration Date</h2>
      <DatePicker
        selected={minDate ? new Date(minDate) : null}
        onChange={(date) => setMinDate(date?.toISOString().split("T")[0])}
        className="w-full py-2 px-4 rounded-md border border-gray-300 text-gray-700 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholderText="Select a date"
        dateFormat="yyyy-MM-dd"
        isClearable
        showPopperArrow={false}
      />
    </div>
  );
};

export default ExpirationDateFilter;
