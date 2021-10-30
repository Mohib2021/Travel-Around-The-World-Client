import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeFirebase from "../../Firebase/Firebase.init";
initializeFirebase();
const useFirebase = () => {
	const [error, setError] = useState("");

	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const location = useLocation();
	const history = useHistory();
	const redirectURL = location.state?.from || "home";
	const signUpUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((res) => {
				setUser(res.user);
				history.push(redirectURL);
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
	};
	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
			setIsLoading(false);
		}
	});
	return { user, signUpUsingGoogle, logOut, isLoading };
};
export default useFirebase;
