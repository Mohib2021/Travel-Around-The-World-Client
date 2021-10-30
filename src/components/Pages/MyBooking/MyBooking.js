import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useFirebase/useAuth";
import ShowMyBooking from "./ShowMyBooking";

function MyBooking() {
	const { user } = useAuth();
	const [booking, setBooking] = useState([]);
	const deleteBookingPackage = (_id) => {
		const confirmation = window.confirm(
			"Are you sure that you want to cancel?"
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
			.then((data) => setBooking(data));
	}, [deleteBookingPackage]);

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
