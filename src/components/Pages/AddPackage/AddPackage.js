import React from "react";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

function AddPackage() {
	const history = useHistory();
	// using useRef to get input value
	const titleRef = useRef();
	const imgRef = useRef();
	const desRef = useRef();
	const priceRef = useRef();
	const locationRef = useRef();
	const handlePackageSubmit = (e) => {
		e.preventDefault();
		// getting input value by the help of ref
		const title = titleRef.current.value;
		const img = imgRef.current.value;
		const desc = desRef.current.value;
		const location = locationRef.current.value;
		const price = priceRef.current.value;
		// making brand new package
		const newPackage = {
			name: title,
			location: location,
			image: img,
			price: price,
			description: desc,
			status: "Pending",
		};
		fetch("https://mysterious-everglades-05992.herokuapp.com/packages", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newPackage),
		}).then((res) => {
			// clearing the input field
			titleRef.current.value = "";
			imgRef.current.value = "";
			desRef.current.value = "";
			locationRef.current.value = "";
			priceRef.current.value = "";
			console.log(res);
			history.push("/home");
		});
	};
	return (
		<Container>
			<Row className="justify-content-center my-3 ">
				<Col md={5} sm={8}>
					<form
						data-aos="fade-up"
						onSubmit={handlePackageSubmit}
						className="bg-dark p-3 rounded text-white "
					>
						<h3 className="text-center mb-3">Add a package</h3>
						<div className="mb-3">
							<input
								ref={titleRef}
								className="form-control"
								type="text"
								placeholder="Title"
								required
							/>
						</div>
						<div className="mb-3">
							<input
								ref={locationRef}
								className="form-control"
								type="text"
								placeholder="Location"
								required
							/>
						</div>
						<div className="mb-3">
							<input
								ref={imgRef}
								className="form-control"
								type="text"
								placeholder="Image Link"
								required
							/>
						</div>
						<div className="mb-3">
							<input
								ref={priceRef}
								className="form-control"
								type="number"
								placeholder="Price"
								required
							/>
						</div>
						<div className="mb-3">
							<textarea
								ref={desRef}
								className="form-control"
								placeholder="Description"
								cols="30"
								rows="6"
								required
							></textarea>
						</div>
						<input
							type="submit"
							className="btn btn-outline-secondary"
							value="ADD"
						/>
					</form>
				</Col>
			</Row>
		</Container>
	);
}

export default AddPackage;
