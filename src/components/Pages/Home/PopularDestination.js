import React from "react";
import { Col, Row } from "react-bootstrap";

function PopularDestination() {
	return (
		<div className="my-3 mt-md-4">
			<h2 className="text-center">Popular Destinations :-</h2>
			<Row className="g-3 mt-2 align-items-center">
				<Col md={6} sm={12} className="order-md-0 order-sm-0">
					<div data-aos="fade-right">
						<h4>The Taj Mahal</h4>
						<div className="ms-5 mb-3">
							<b className="blockquote-footer">Agra, India</b>
						</div>
						<p>
							This is the Taj Majal which is situated in India. It's one of the
							most fascinating place to visit. Specially people who are in love
							or in a relationship want to visit as well as the general people
							to look up the beauty of the building which was made by King
							Sahjahan.
						</p>
					</div>
				</Col>
				<Col md={6} sm={12} className="order-md-2 order-sm-2">
					<div data-aos="fade-left">
						<img
							className="img-fluid"
							src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
						/>
					</div>
				</Col>
				<Col md={6} sm={12} className="order-md-3 order-sm-2">
					<div data-aos="fade-left">
						<h4>The Water Fall</h4>
						<div className="ms-5 mb-3">
							<b className="blockquote-footer">Salto Angle, Venezuela</b>
						</div>
						<p>
							One of the best places to watch and enjoy the natural beauty with
							water fall around the world is in Venezuela. It's a great place to
							make ourself refreshment. People who are mostly affected by
							travelling want to visit this place more and more.
						</p>
					</div>
				</Col>
				<Col md={6} sm={12} className="order-md-2 order-sm-3">
					<div data-aos="fade-right">
						<img
							className="img-fluid"
							src="https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
						/>
					</div>
				</Col>
				<Col md={6} sm={12} className="order-md-4 ">
					<div data-aos="fade-right">
						<h4>The Eiffel Tower </h4>
						<div className="ms-5 mb-3">
							<b className="blockquote-footer">Parish, French</b>
						</div>
						<p>
							This is the Taj Majal which is situated in India. It's one of the
							most fascinating place to visit. Specially people who are in love
							or in a relationship want to visit as well as the general people
							to look up the beauty of the building which was made by King
							Sahjahan.
						</p>
					</div>
				</Col>
				<Col md={6} sm={12} className="order-5">
					<div data-aos="fade-left">
						<img
							className="img-fluid"
							src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default PopularDestination;
