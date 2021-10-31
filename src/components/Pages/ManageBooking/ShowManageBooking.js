import React from "react";
import { Col } from "react-bootstrap";

function ShowManageBooking({ booking, deletePackage, approve }) {
	// destructuring booking data
	const { packageName, packageImg, status, _id } = booking;
	const shadow = {
		boxShadow: "0px 0px 10px gray",
	};

	return (
		<Col md={3} sm={4} xs={6}>
			<div className="my-4 p-2 " style={shadow}>
				<img className="img-fluid" src={packageImg} alt="package-Img" />
				<h4>{packageName}</h4>
				<div className="blockquote-footer ms-5 my-3">
					<b>{status}</b>
				</div>
				<button onClick={() => approve(_id)} className="btn btn-dark me-3">
					Approve
				</button>
				<button onClick={() => deletePackage(_id)} className="btn btn-danger">
					Delete
				</button>
			</div>
		</Col>
	);
}

export default ShowManageBooking;
