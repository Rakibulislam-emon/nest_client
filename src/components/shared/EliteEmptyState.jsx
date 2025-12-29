/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const EliteEmptyState = ({
  icon = "🛒",
  title = "Your cart is empty",
  description = "Looks like you haven't added anything to your cart yet.",
  buttonText = "Start Shopping",
  buttonLink = "/shop",
  onButtonClick,
}) => {
  return (
    <div className="py-24 px-6 text-center glass rounded-[3rem] border border-white/40 shadow-premium max-w-2xl mx-auto my-12 relative overflow-hidden animate-fadeIn">
      {/* Decorative Orbs */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <div className="text-8xl mb-8 animate-float drop-shadow-glow-sm flex items-center justify-center min-h-[120px]">
          {icon}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading tracking-tight mb-4">
          {title}
        </h2>

        <p className="text-neutral-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          {description}
        </p>

        {onButtonClick ? (
          <button
            onClick={onButtonClick}
            className="group inline-flex items-center gap-3 py-4 px-10 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-500 transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5 active:scale-95"
          >
            {buttonText}
            <FiArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        ) : (
          <Link
            to={buttonLink}
            className="group inline-flex items-center gap-3 py-4 px-10 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-500 transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5 active:scale-95"
          >
            {buttonText}
            <FiArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default EliteEmptyState;
