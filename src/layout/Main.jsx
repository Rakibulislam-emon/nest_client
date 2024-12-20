import { Outlet } from "react-router";
import Header from "../components/common/Header/Header";
import Container from "../components/shared/Container";
import Footer from "../components/common/Footer/Footer";

export default function Main() {
  return (
    <Container>
      <Header/>
      <Outlet />
      <Footer/>
    </Container>
  );
}
