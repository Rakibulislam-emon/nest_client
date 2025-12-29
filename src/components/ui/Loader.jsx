import CommonLoader from "../common/Loader";

/**
 * Legacy Loader wrapper - delegates to new Common Loader
 */
export default function Loader(props) {
  // Map old props to new if needed, or just pass through
  return (
    <div className="flex w-full justify-center h-screen items-center">
      <CommonLoader size="lg" {...props} />
    </div>
  );
}
