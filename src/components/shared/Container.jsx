import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
export default function Container({ children, className }) {
  return (
    <div className={twMerge(`max-w-screen-2xl mx-auto px-4 lg:px-0`, className)}>
      {children}
    </div>
  );
}

