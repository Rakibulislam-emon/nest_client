/* eslint-disable react/prop-types */
const ShippingInfoForm = ({ shippingInfo, handleChange, user }) => {
  const fields = [
    {
      name: "name",
      label: "Full Name",
      placeholder: "e.g. Alexander Knight",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "alex@example.com",
      type: "email",
      required: true,
      value: user?.emailAddresses?.[0]?.emailAddress || shippingInfo.email,
    },
    {
      name: "address",
      label: "Street Address",
      placeholder: "123 Organic Lane",
      type: "text",
      required: true,
    },
    {
      name: "city",
      label: "City",
      placeholder: "San Francisco",
      type: "text",
      required: true,
    },
    {
      name: "state",
      label: "State",
      placeholder: "California",
      type: "text",
      required: true,
    },
    {
      name: "postalCode",
      label: "Postal Code",
      placeholder: "94107",
      type: "number",
      required: true,
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl font-black text-neutral-900 font-heading">
          Shipping Logistics
        </h2>
        <p className="text-neutral-500 font-medium">
          Please provide your precise delivery destination.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {fields.map((field) => (
          <div
            key={field.name}
            className={`space-y-2 ${
              field.name === "address" ? "md:col-span-2" : ""
            }`}
          >
            <label
              htmlFor={field.name}
              className="text-xs font-black text-neutral-400 uppercase tracking-widest ml-1"
            >
              {field.label}
            </label>
            <input
              required={field.required}
              id={field.name}
              type={field.type}
              name={field.name}
              value={
                field.value !== undefined
                  ? field.value
                  : shippingInfo[field.name]
              }
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-neutral-800 placeholder:font-normal placeholder:text-neutral-300 shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingInfoForm;
