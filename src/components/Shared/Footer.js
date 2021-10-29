import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	const plane = <FontAwesomeIcon icon={faPaperPlane} />;
	return (
		<footer className="bg-dark pt-3">
			<Container>
				<Row className="text-white  pt-5 mb-4 g-4">
					<Col md={4} sm={6}>
						<div>
							<h4>
								{plane} Top <span className="text-danger">Travel</span> Tour
							</h4>
							<ul className="mt-3">
								<li>Bangladesh to India</li>
								<li>India to Pakistan</li>
								<li>Pakistan to America</li>
								<li>America to England</li>
								<li>England to Bangladesh</li>
							</ul>
						</div>
					</Col>
					<Col md={4} sm={6}>
						<div>
							<h4>Top Features</h4>
							<ul>
								<li>Travelling By River</li>
								<li>Travelling by Train</li>
								<li>Travelling by Plane</li>
								<li>Travelling with Security</li>
								<li>Travelling with Satisfaction</li>
							</ul>
						</div>
					</Col>
					<Col md={4} sm={6}>
						<div>
							<h4>Contact Info</h4>
							<ul>
								<li>Email : travelTour@gmail.com</li>
								<li>Phone : ++233244342</li>
								<li>Address : Big Ben, London</li>
							</ul>
						</div>
					</Col>
				</Row>
				<div className="text-center text-white text-muted pb-4">
					<p>
						COPYRIGHT &copy; 2010-{new Date().getFullYear()} WORLD TOUR, ALL
						RIGHT RESERVED
					</p>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
