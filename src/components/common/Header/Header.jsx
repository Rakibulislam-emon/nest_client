import { useState } from "react";
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import TopHeader from "./TopHeader";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky z-[100] top-0 bg-white">
      <TopHeader />
      <MiddleHeader toggleMobileMenu={toggleMobileMenu} />
      <BottomHeader />
      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </div>
  );
};
