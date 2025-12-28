/* eslint-disable react/prop-types */

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ExpirationDateFilter = ({ minDate, setMinDate }) => {
  return (
    <div className="group/section">
      <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em] font-sans mb-6">
        Expiration Date
      </h3>
      <div className="relative">
        <DatePicker
          selected={minDate ? new Date(minDate) : null}
          onChange={(date) => setMinDate(date?.toISOString().split("T")[0])}
          className="w-full pl-4 pr-4 py-3.5 bg-neutral-50 border border-neutral-100 rounded-xl text-sm font-bold text-neutral-700 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all shadow-inner-soft placeholder:text-neutral-300 placeholder:font-medium"
          placeholderText="Select a date"
          dateFormat="yyyy-MM-dd"
          isClearable
          showPopperArrow={false}
        />
      </div>
    </div>
  );
};

export default ExpirationDateFilter;
