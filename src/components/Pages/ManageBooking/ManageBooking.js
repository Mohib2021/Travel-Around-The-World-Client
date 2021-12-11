import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { Container, Row } from "react-bootstrap";
import ShowManageBooking from "./ShowManageBooking";

function ManageBooking() {
	const [allBooking, setAllBooking] = useState([]);
	const deleteBookingPackage = (_id) => {
		// checking, user is sure or not
		const confirmation = window.confirm(
			"Are you sure that you want to delete?"
		);
		if (confirmation) {
			const url = `https://mysterious-everglades-05992.herokuapp.com/confirm/${_id}`;
			fetch(url, {
				method: "DELETE",
			}).then((res) => console.log(res));
		}
	};

	// updating from pending to approved
	const approvePackage = (_id) => {
		const approvedPackage = allBooking.find((single) => single._id === _id);
		approvedPackage.status = "Approved";

		const url = `https://mysterious-everglades-05992.herokuapp.com/confirm/${_id}`;
		fetch(url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(approvedPackage),
		}).then((res) => console.log(res));
	};
	const backCall = useCallback(() => {
		//body
	}, [deleteBookingPackage]);
	useEffect(() => {
		fetch("https://mysterious-everglades-05992.herokuapp.com/confirm")
			.then((res) => res.json())
			.then((data) => setAllBooking(data));
	}, [backCall]);
	return (
		<Container>
			<div className="text-center mt-3">
				<h2>Manage all of the bookings :-</h2>
			</div>
			{allBooking.length > 0 ? (
				<Row>
					{allBooking.map((booking) => (
						<ShowManageBooking
							key={booking._id}
							booking={booking}
							deletePackage={deleteBookingPackage}
							approve={approvePackage}
						/>
					))}
				</Row>
			) : (
				<div
					style={{ height: "75vh" }}
					className=" d-flex align-items-center justify-content-center"
				>
					<h5>Sorry, There is not any booking package.</h5>
				</div>
			)}
		</Container>
	);
}

export default ManageBooking;
