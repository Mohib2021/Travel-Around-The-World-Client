import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useFirebase/useAuth";

function Login() {
	const { signUpUsingGoogle } = useAuth();

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={5} sm={5}>
					<div
						data-aos="fade-down"
						className="my-4 py-3 bg-dark rounded text-center text-white"
					>
						<img
							style={{ width: "20%" }}
							className="img-fluid"
							src="https://i.ibb.co/wpMWsDM/helicopter2.png"
							alt=""
						/>
						<h3 className="">Please Login With Google</h3>
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
