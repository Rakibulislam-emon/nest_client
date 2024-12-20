import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import TopHeader from "./TopHeader";
export default function Header() {
  return (
    <div className="sticky z-[100] top-0 bg-white">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
  )
};
