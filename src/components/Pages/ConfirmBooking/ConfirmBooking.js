import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

function ConfirmBooking() {
	const nameRef = useRef();
	const emailRef = useRef();
	const addressRef = useRef();
	const [bookingPackage, setBookingPackage] = useState({});
	const { name, image, description, location, price } = bookingPackage;
	const { _id } = useParams();
	const url = `http://localhost:5000/packages/${_id}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setBookingPackage(data));
	}, []);
	const shadowStyle = {
		boxShadow: "0px 0px 10px gray",
	};
	const handleSubmitConfirmation = (e) => {
		e.preventDefault();
		const fullName = nameRef.current.value;
		const email = emailRef.current.value;
		const address = addressRef.current.value;
		const bookingPackage = {
			fullName: fullName,
			email: email,
			address: address,
			packageName: name,
			packageImg: image,
			description: description,
			price: price,
			location: location,
		};
		fetch("http://localhost:5000/confirm", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(bookingPackage),
		}).then((res) => {
			nameRef.current.value = "";
			emailRef.current.value = "";
			addressRef.current.value = "";
			console.log(res);
		});
	};
	return (
		<Container>
			<div className="p-2">
				<Row
					style={shadowStyle}
					className=" my-3  align-items-center justify-content-center py-3 px-2"
				>
					<Col md={6}>
						<div>
							<img
								className="img-fluid rounded"
								src={image}
								alt="package-img"
							/>
						</div>
					</Col>
					<Col md={6}>
						<div className="mt-md-0 mt-3">
							<h3> {name}</h3>
							<div className="blockquote-footer mt-3 ms-5">
								<b>{location}</b>
							</div>
							<p> {description}</p>
							<h4>${price}</h4>
						</div>
					</Col>
					<Col md={6}>
						<div>
							<form
								onSubmit={handleSubmitConfirmation}
								style={shadowStyle}
								className=" p-3 mt-3 bg-dark text-white rounded "
							>
								<h3 className="text-center mb-3">Confirm Your Booking</h3>
								<div className="mb-3">
									<label htmlFor="name">Your Full Name :</label>
									<input ref={nameRef} className="form-control" type="text" />
								</div>
								<div className="mb-3">
									<label htmlFor="email">Your Email :</label>
									<input ref={emailRef} className="form-control" type="text" />
								</div>
								<div className="mb-3">
									<label htmlFor="home-address">Your Address :</label>
									<textarea
										ref={addressRef}
										className="form-control"
										placeholder="Address"
										cols="30"
										rows="5"
									></textarea>
								</div>
								<input
									type="submit"
									className="btn btn-outline-secondary"
									value="Confirm"
								/>
							</form>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default ConfirmBooking;
