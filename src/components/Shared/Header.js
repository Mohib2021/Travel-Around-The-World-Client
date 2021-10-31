import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useFirebase/useAuth";
import "./Header.css";
function Header() {
	const { user, logOut } = useAuth();
	return (
		<div className="sticky-top">
			<Navbar bg="dark" collapseOnSelect variant="dark" expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/home">
						<div className="d-flex align-items-center">
							<img
								className="img-fluid logo me-2"
								src="https://i.ibb.co/wpMWsDM/helicopter2.png"
								alt=""
							/>
							<h4 className="logo-heading">World Tour</h4>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto navigation text-center text-md-start">
							<Nav.Link className="active " as={Link} to="/home">
								Home
							</Nav.Link>
							{user.displayName && (
								<Nav.Link as={Link} to="/myBooking">
									My Booking
								</Nav.Link>
							)}
							{user.displayName && (
								<Nav.Link as={Link} to="/manageBooking">
									Manage Booking
								</Nav.Link>
							)}
							{user.displayName && (
								<Nav.Link as={Link} to="addPackage">
									Add Package
								</Nav.Link>
							)}
							<Nav.Link as={Link} to="/about">
								About
							</Nav.Link>
							{user.displayName && <Nav.Link>{user.displayName}</Nav.Link>}
							{!user.displayName ? (
								<Nav.Link as={Link} to="/login">
									<button className="btn btn-outline-secondary">LogIn</button>
								</Nav.Link>
							) : (
								<Nav.Link as={Link} to="/home">
									<button
										onClick={logOut}
										className="btn btn-outline-secondary"
									>
										LogOut
									</button>
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
