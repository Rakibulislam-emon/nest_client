import { Outlet } from "react-router";
import Header from "../components/common/Header/Header";
import Container from "../components/shared/Container";

export default function Main() {
  return (
    <Container>
      <Header/>
      <Outlet />
    </Container>
  );
}
