import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
// declaring useAuth to access all data form anywhere
const useAuth = () => {
	return useContext(AuthContext);
};
export default useAuth;
