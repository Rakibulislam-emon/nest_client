/* eslint-disable react/prop-types */
export default function DealsCard({deal}) {
    const {image} = deal
  return (
    <div className=" py-20">
      <div className=" mb-20  w-full">
        <div className="relative  rounded-3xl border max-w-md max-h-[400px] z-1">
          {/* Image */}
          <img
            // src="https://i.ibb.co.com/x2qWwhw/images-q-tbn-ANd9-Gc-RSUCV0d-uk-GZXhs5d9qj-Oda-Ls-D6f-Wk-Ti-R5w-N9-XOBT4uas-OKmm.jpg"
            src={image}
            alt="Deal Image"
            className="w-full  h-[360px] rounded-lg object-cover mix-blend-multiply"
          />

          {/* Card Content */}
          <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2/4 p-4 bg-white rounded-lg shadow-md  w-[calc(100%-120px)]">
            <h1 className="text-lg font-semibold mb-2">
              Authoritatively negotiate distributed value and cross-unit
            </h1>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Rating: ⭐⭐⭐⭐</span>
              <span>by Someone</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Price: $3</span>
              <span className="text-red-500 line-through text-sm">
                Discount price: $2
              </span>
            </div>

            <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
