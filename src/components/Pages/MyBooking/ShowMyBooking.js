import React from "react";
import { Col, Row } from "react-bootstrap";

function ShowMyBooking({ booking, deleteBookingPackage }) {
	const { price, packageImg, packageName, location, description, status, _id } =
		booking;
	// making custom shadow
	const shadow = {
		boxShadow: "0px 0px 10px gray",
	};

	return (
		<>
			<Row style={shadow} className=" align-items-center mb-3 mb-md-4">
				<Col className="mt-0 py-2" md={6} sm={12}>
					<div>
						<img className="img-fluid rounded" src={packageImg} alt="" />
					</div>
				</Col>
				<Col className="mt-0 my-2" md={6} sm={12}>
					<div>
						<h4>{packageName}</h4>
						<div className="blockquote-footer my-2 ms-5">
							<b>{location}</b>
						</div>
						<p>{description}</p>
						<h5>${price}</h5>
						<p>
							<b>Status : {status}</b>
						</p>
						<button
							onClick={() => deleteBookingPackage(_id)}
							className="btn btn-danger"
						>
							Cancel
						</button>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default ShowMyBooking;
