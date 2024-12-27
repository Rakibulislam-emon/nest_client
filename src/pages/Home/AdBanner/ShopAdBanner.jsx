import { Link } from "react-router";
export default function ShopAdBanner() {
  const data = [
    {
      text: "Everyday Fresh & Clean with Our Products",
      imgUrl:
        "https://i.ibb.co.com/55sYsNM/images-q-tbn-ANd9-Gc-T0-KJUpj-Cp-Yd-Of-T2yes-X6-MECXYux-Te-IVFg-STP8-FBIM4-Gx-Hik-VDI.jpg",
      bgColor: "#f3e8e8", // Dynamic background color
    },
    {
      text: "Make your Breakfast Healthy and Easy",
      imgUrl: "https://i.ibb.co.com/mT0fpc1/1-800x800-grande.jpg",
      bgColor: "#f0e8d5", // Dynamic background color
    },
    {
      text: "The best Organic Products Online",
      imgUrl:
        "https://i.ibb.co.com/x2qWwhw/images-q-tbn-ANd9-Gc-RSUCV0d-uk-GZXhs5d9qj-Oda-Ls-D6f-Wk-Ti-R5w-N9-XOBT4uas-OKmm.jpg",
      bgColor: "#e7eaf3", // Dynamic background color
    },
  ];

  return (
    <div className="hidden md:grid  md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, idx) => (
        <div
          key={idx}
          style={{ backgroundColor: item.bgColor }} // Apply dynamic background color
          className="flex flex-col sm:flex-row lg:flex-row items-center justify-between p-4 rounded-lg shadow-lg"
        >
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {item.text}
            </h3>
            <Link
              to={"/shop"}
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <img
              src={item.imgUrl}
              alt={`Banner ${idx + 1}`}
              className="w-full h-auto rounded-lg object-cover mix-blend-multiply"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
