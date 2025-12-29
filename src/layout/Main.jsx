import { Outlet, useLocation } from "react-router";
import Header from "../components/common/Header/Header";
import Container from "../components/shared/Container";
import Footer from "../components/common/Footer/Footer";
import { FilterProvider } from "../context/FilterContext";

import ScrollToTop from "../components/shared/ScrollToTop";

export default function Main() {
  const location = useLocation();

  return (
    <FilterProvider>
      <ScrollToTop />
      <Container>
        <Header />
        <div key={location.pathname} className="animate-fade-in">
          <Outlet />
        </div>
        <Footer />
      </Container>
    </FilterProvider>
  );
}
