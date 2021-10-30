import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowManageBooking from "./ShowManageBooking";

function ManageBooking() {
	const [allBooking, setAllBooking] = useState([]);
	const deleteBookingPackage = (_id) => {
		const confirmation = window.confirm(
			"Are you sure that you want to delete?"
		);
		if (confirmation) {
			const url = `http://localhost:5000/confirm/${_id}`;
			fetch(url, {
				method: "DELETE",
			}).then((res) => console.log(res));
		}
	};
	useEffect(() => {
		fetch("http://localhost:5000/confirm")
			.then((res) => res.json())
			.then((data) => setAllBooking(data));
	}, [deleteBookingPackage]);
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
