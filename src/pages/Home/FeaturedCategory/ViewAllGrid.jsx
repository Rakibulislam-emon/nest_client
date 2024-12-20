
/* eslint-disable react/prop-types */

const ViewAllGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 clear-both">
      {data.map((item,) => (
        // Map over the 'products' array from each 'item'
        item.products.map((product, productIdx) => (
          <div key={productIdx} className="flex flex-col items-center">
            {/* <Image
              width={200}
              height={200}
              src={product.image} // Use product.image
              alt={product.name}  // Use product.name as alt text
              className="w-40 h-40 rounded-full object-cover"
            /> */}
            <img src={product.image} // Use product.image
              alt={product.name}  // Use product.name as alt text
              className="w-40 h-40 rounded-full object-cover" />
            <p className="text-center mt-2 text-lg font-medium">{product.name}</p> {/* Use product.name */}
          </div>
        ))
      ))}
    </div>
  );
};

export default ViewAllGrid;
