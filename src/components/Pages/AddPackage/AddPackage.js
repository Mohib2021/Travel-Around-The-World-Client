import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AddPackage() {
	return (
		<Container>
			<Row className="justify-content-center my-3 my-md-5">
				<Col md={5} sm={8}>
					<form className="bg-dark p-3 rounded text-white ">
						<h3 className="text-center mb-3">Add a package</h3>
						<div className="mb-3">
							<input className="form-control" type="text" placeholder="Title" />
						</div>
						<div className="mb-3">
							<input
								className="form-control"
								type="text"
								placeholder="Image Link"
							/>
						</div>
						<div className="mb-3">
							<textarea
								className="form-control"
								placeholder="Description"
								cols="30"
								rows="10"
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
