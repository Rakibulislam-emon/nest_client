import { Outlet } from "react-router";
import Header from "../components/common/Header/Header";
import Container from "../components/shared/Container";
import Footer from "../components/common/Footer/Footer";
import { FilterProvider } from "../context/FilterContext";

export default function Main() {
  return (
    <FilterProvider>
      <Container>
        <Header/>
        <Outlet />
        <Footer/>
      </Container>
    </FilterProvider>
  );
}
