import img from "../../../assets/bg.avif";

export default function FilterBottomImage() {
  return (
    <div className="h-64 rounded-2xl overflow-hidden shadow-medium border border-neutral-100 group/banner">
      <div
        className="h-full transition-transform duration-700 group-hover/banner:scale-110"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
