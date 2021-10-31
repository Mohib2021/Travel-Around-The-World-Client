import React from "react";
import { Col, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

function Package({ singlePackage }) {
	const history = useHistory();
	// destructuring
	const { name, image, description, _id, price, location } = singlePackage;
	// making shadow
	const shadowStyle = {
		boxShadow: "4px 5px 7px  black",
	};

	return (
		<Col md={4} sm={6}>
			<div className="bg-dark text-white p-3 rounded" style={shadowStyle}>
				<img className="img-fluid rounded" src={image} alt="package-img" />
				<h4 className="mt-2">{name}</h4>
				<div className="blockquote-footer mt-2 ms-5">
					<b>{location}</b>
				</div>
				<p>{description}</p>
				<h4 className="mb-3">${price}</h4>
				<button
					onClick={() => history.push(`/confirmBooking/${_id}`)}
					className="btn btn-outline-secondary "
				>
					Booking
				</button>
			</div>
		</Col>
	);
}

export default Package;
