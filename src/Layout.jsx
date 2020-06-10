import React from "react";
import { Container } from "reactstrap";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container className="mt-5">{children}</Container>
    </>
  );
}

export default Layout;
