import img from "../../../assets/bg.avif";

export default function FilterBottomImage() {
  return (
    <div className=" h-56">
      <div
              className="h-full" // Set height to 100% to ensure it fills the space
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover", // Ensure the image covers the space
                backgroundPosition: "center", // Center the image
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
  )
}
