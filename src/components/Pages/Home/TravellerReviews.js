import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./TravellerReviews.css";
// importing font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function TravellerReviews() {
	// getting start icon
	const star = <FontAwesomeIcon icon={faStar} />;

	return (
		<div className="mb-3">
			<div className="text-center my-3 mt-md-4">
				<h2>Our Traveller's Reviews :-</h2>
			</div>
			<Carousel fade>
				<Carousel.Item>
					<Row className="bg-dark text-white p-3  rounded align-items-center g-4">
						<Col md={6} sm={12}>
							<img
								className="d-block w-100 rounded"
								src="https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt="First slide"
							/>
						</Col>
						<Col md={6} sm={12}>
							<div>
								<h4>Matt Cerry</h4>
								<p>
									We the couple together with our friends travelled different
									places specially water fall and sea beach from India to
									Scotland with the help of this planet. To be honest the
									services which they provide is wonderful. We were fully
									satisfied and must need to appreciate them.
								</p>
								<p className="text-warning">
									{star} {star} {star} {star} {star}
								</p>
							</div>
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row className="bg-dark text-white p-3 align-items-center g-4">
						<Col md={6} sm={12}>
							<img
								className="d-block w-100 rounded"
								src="https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt="Second slide"
							/>
						</Col>

						<Col md={6} sm={12}>
							<div>
								<h4>Showaib Shanewaj</h4>
								<p>
									By the help of this planet I already visited more that ten
									countries and places all around the world. Getting a lot of
									fun and enjoying with and efficient manner is the main
									fundamental concept of this world tour. So, you also can book
									if you are interested.
								</p>
								<p className="text-warning">
									{star} {star} {star} {star} {star}
								</p>
							</div>
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row className="bg-dark align-items-center text-white p-3 g-4">
						<Col md={6} sm={12}>
							<img
								className="d-block w-100 rounded"
								src="https://images.pexels.com/photos/3572740/pexels-photo-3572740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt="Third slide"
							/>
						</Col>

						<Col md={6} sm={12}>
							<div>
								<h4>Henry Ford</h4>
								<p>
									This is one of the best planet to gather a lot of knowledge as
									well as enjoying all around the world by travelling. It's one
									of the best place to booking travelling when we feel free and
									even in a vacation.
								</p>
								<p className="text-warning">
									{star} {star} {star} {star} {star}
								</p>
							</div>
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row className="bg-dark align-items-center  text-white p-3 g-4">
						<Col md={6} sm={12}>
							<img
								className="d-block w-100 rounded"
								src="https://images.pexels.com/photos/7902950/pexels-photo-7902950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt="Third slide"
							/>
						</Col>

						<Col md={6} sm={12}>
							<div>
								<h4>Angel Lyssa</h4>
								<p>
									I got a great experience by travelling with the help of world
									tour. Over the last five years I still travelling different
									countries when I feel free and have a vacation I remember this
									wonderful tour reserver plan.
								</p>
								<p className="text-warning">
									{star} {star} {star} {star} {star}
								</p>
							</div>
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default TravellerReviews;
