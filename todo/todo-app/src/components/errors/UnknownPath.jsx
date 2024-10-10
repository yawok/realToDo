import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

function UnknownPath() {
  return (
    <>
      <Header />
      <Container className="m-auto my-2">
        <h1>You might have made a mistake😅.</h1>
        <p>There is no page here. Sorry!</p>
      </Container>
    </>
  );
}

export default UnknownPath;
