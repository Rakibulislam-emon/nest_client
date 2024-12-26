/* eslint-disable react/prop-types */
import "./Style.css";
import { twMerge } from "tailwind-merge";
export default function Loader({className,}) {
  return (
    <div className={twMerge("flex w-full justify-center h-screen items-baseline",className)}>
      <div className="spinner ">
      </div>
    </div>
  );
}
