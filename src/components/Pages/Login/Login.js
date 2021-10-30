import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useFirebase/useAuth";

function Login() {
	const { user, signUpUsingGoogle } = useAuth();

	return (
		<div className="my-5 text-center">
			<button onClick={signUpUsingGoogle}>Login with google</button>
		</div>
	);
}

export default Login;
