import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useFirebase/useAuth";

function Login() {
	const { user, signUpUsingGoogle } = useAuth();

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={5} sm={5}>
					<div className="my-4 py-3 bg-dark rounded text-center text-white">
						<img
							style={{ width: "20%" }}
							className="img-fluid"
							src="https://i.ibb.co/wpMWsDM/helicopter2.png"
							alt=""
						/>
						<h2 className="">Please Login</h2>
						<img
							onClick={signUpUsingGoogle}
							style={{ cursor: "pointer", width: "40%" }}
							className="img-fluid"
							src="https://i.ibb.co/GR8QvhF/google.png"
							alt="google icon"
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Login;
