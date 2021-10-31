import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Carousal from "./Carousal";
import Package from "./Package";
import TravellerReviews from "./TravellerReviews";
import "./Home.css";
import PopularDestination from "./PopularDestination";
function Home() {
	const [packages, setPackages] = useState([]);
	// loading all packages
	useEffect(() => {
		fetch("https://mysterious-everglades-05992.herokuapp.com/packages")
			.then((res) => res.json())
			.then((data) => setPackages(data));
	}, []);
	return (
		<div>
			<Carousal />
			<Container>
				<div className=" my-3 mt-md-4">
					<h2 className="text-center">Our Packages :-</h2>
				</div>
				<Row className="g-4 mb-3">
					{packages.map((singlePackage) => (
						<Package key={singlePackage._id} singlePackage={singlePackage} />
					))}
				</Row>
				<PopularDestination />
				<TravellerReviews />
			</Container>
		</div>
	);
}

export default Home;
