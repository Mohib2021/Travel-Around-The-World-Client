import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
	// making shadow
	const shadowStyle = {
		boxShadow: "0px 0px 10px gray",
	};
	return (
		<Container>
			<div className="text-center my-4">
				<h3>Know The key points :-</h3>
			</div>
			<Row className="g-4 mb-4">
				<Col md={4} sm={6}>
					<div style={shadowStyle} className="p-3">
						<h4 className="text-center bg-dark text-white py-3 rounded">
							About Us
						</h4>
						<ul>
							<li>We ensure 24/7 hours support</li>
							<li>It's an online based platform</li>
							<li>We have trained staff</li>

							<li>Our Goal is to satisfy you.</li>
							<li>We give best services</li>
						</ul>
						<p>
							We have communication with more than hundred country and have some
							amazing selected place. To visit those place we have our own well
							trained staff who will help you to reach to your destination.
						</p>
					</div>
				</Col>
				<Col md={4} sm={6}>
					<div style={shadowStyle} className="p-3">
						<h4 className="text-center bg-dark text-white py-3 rounded">
							About Booking System
						</h4>
						<ul>
							<li>You can book any package</li>
							<li>You have to pay the price</li>
							<li>We will conform your travelling</li>

							<li>Everything will be done online</li>
							<li>You can cancel booking if you want</li>
						</ul>
						<p>
							As soon as you will book any package of our tour, you will
							informed and we will make sure or confirm your booking for the
							specific tour. Also we will inform you when tour will happen.
						</p>
					</div>
				</Col>
				<Col md={4} sm={6}>
					<div style={shadowStyle} className="p-3">
						<h4 className="text-center bg-dark text-white py-3 rounded">
							About Tour
						</h4>
						<ul>
							<li>Our Tour is irregular tour</li>
							<li>It's about from one country to another</li>
							<li>Happen mostly at the time of vacation</li>

							<li>It's a tour to give you pleasure</li>
							<li>Gain some knowledge about the world</li>
						</ul>
						<p>
							Our tour is not only about a specific country but also all around
							the world. The most thing is this is a tour which is not about
							regular basis. It's an irregular tour specially it happen in
							vacation.
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
