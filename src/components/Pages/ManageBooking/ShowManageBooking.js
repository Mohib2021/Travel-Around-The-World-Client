import React from "react";
import { Col, ListGroup } from "react-bootstrap";

function ShowManageBooking({ booking, deletePackage, approve }) {
	// destructuring booking data
	const { packageName, packageImg, status, _id, email, address, fullName } =
		booking;
	const shadow = {
		boxShadow: "0px 0px 10px gray",
	};

	return (
		<Col md={4} sm={6} xs={12}>
			<div
				data-aos="fade-right"
				className="my-3 my-md-4 p-3 rounded "
				style={shadow}
			>
				<img className="img-fluid rounded" src={packageImg} alt="package-Img" />
				<h4 className="mt-2">{packageName}</h4>
				<div className="blockquote-footer ms-5 my-3">
					<b>{status}</b>
				</div>
				<ListGroup className="small mb-3">
					<ListGroup.Item>Name : {fullName}</ListGroup.Item>
					<ListGroup.Item>Mail : {email}</ListGroup.Item>
					<ListGroup.Item>Address : {address}</ListGroup.Item>
				</ListGroup>

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
