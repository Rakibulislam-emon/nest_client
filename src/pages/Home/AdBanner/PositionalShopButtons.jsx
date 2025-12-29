import { Link } from "react-router";
import Button from "../../../components/common/Button";

/* eslint-disable react/prop-types */
export default function PositionalShopButtons({
  image,
  title,
  discount,
  text,
}) {
  return (
    <div className="relative h-full min-h-[180px] md:min-h-[220px] aspect-[16/9] md:aspect-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-premium hover:shadow-2xl transition-all duration-500 bg-neutral-200">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>

      <div className="absolute top-1/2 left-8 md:left-12 transform -translate-y-1/2 max-w-[70%] text-white transition-transform duration-500 group-hover:-translate-y-[55%]">
        <h2 className="text-2xl md:text-4xl font-bold font-heading mb-3 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl font-bold text-amber-400 mb-6 lg:mb-8">
          {discount}
        </p>
        <Link to={"/shop"}>
          <Button
            variant="warning"
            className="shadow-lg hover:shadow-glow hover:scale-105 transition-all px-6 py-2"
          >
            {text}
          </Button>
        </Link>
      </div>
    </div>
  );
}
