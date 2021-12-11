import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeFirebase from "../../Firebase/Firebase.init";
initializeFirebase();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const location = useLocation();
	const history = useHistory();
	const redirectURL = location.state?.from || "home";
	// google sign Up method
	const signUpUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((res) => {
				setUser(res.user);
				history.push(redirectURL);
			})
			.catch((err) => {})
			.finally(setIsLoading(false));
	};
	// sign out method
	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	// observer
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
			setIsLoading(false);
		});
	}, [auth]);
	return { user, signUpUsingGoogle, logOut, isLoading };
};
export default useFirebase;
