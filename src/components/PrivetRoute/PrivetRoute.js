import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useFirebase/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return (
			<div
				style={{ height: "90vh" }}
				className="mt-5 d-flex align-items-center justify-content-center"
			>
				<h4 className="me-2">Loading...</h4>
				<Spinner animation="border" variant="dark" />
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) => {
				return user.displayName ? (
					children
				) : (
					<Redirect to={{ pathname: "/login", state: { from: location } }} />
				);
			}}
		></Route>
	);
};
export default PrivetRoute;
