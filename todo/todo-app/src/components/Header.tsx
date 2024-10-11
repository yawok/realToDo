import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/" >ToDo</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/new">Add</Nav.Link>
						<Nav.Link href="/all">All Tasks</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
    </>
  );
}

export default Header;
