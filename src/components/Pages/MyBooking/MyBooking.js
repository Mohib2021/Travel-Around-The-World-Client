import React, { useEffect, useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/useFirebase/useAuth";
import ShowMyBooking from "./ShowMyBooking";

function MyBooking() {
	const { user } = useAuth();
	const [booking, setBooking] = useState([]);
	const deleteBookingPackage = (_id) => {
		// checking, the user is sure to delete  or not
		const confirmation = window.confirm(
			"Are you sure that you want to cancel?"
		);
		if (confirmation) {
			const url = `https://mysterious-everglades-05992.herokuapp.com/confirm/${_id}`;
			fetch(url, {
				method: "DELETE",
			}).then((res) => console.log(res));
		}
	};
	const backCall = useCallback(() => {
		//body
	}, [deleteBookingPackage]);
	useEffect(() => {
		fetch("https://mysterious-everglades-05992.herokuapp.com/confirm")
			.then((res) => res.json())
			.then((data) => setBooking(data));
	}, [backCall]);

	// filtering the login user's booking
	const currentUserBooking = booking.filter(
		(singleData) => user.email === singleData.email
	);

	return (
		<Container>
			<div className="mt-3">
				<h2 className="text-center">Your booking packages are :-</h2>
			</div>
			<div className="p-2">
				{currentUserBooking.length > 0 ? (
					currentUserBooking.map((booking) => (
						<ShowMyBooking
							key={booking._id}
							booking={booking}
							deleteBookingPackage={deleteBookingPackage}
						/>
					))
				) : (
					<div
						style={{ height: "75vh" }}
						className=" d-flex align-items-center justify-content-center"
					>
						<h5>Sorry, You don't have any booking packages.</h5>
					</div>
				)}
			</div>
		</Container>
	);
}

export default MyBooking;
