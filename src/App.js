import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import MyBooking from "./components/Pages/MyBooking/MyBooking";
import ManageBooking from "./components/Pages/ManageBooking/ManageBooking";
import AddPackage from "./components/Pages/AddPackage/AddPackage";
import About from "./components/Pages/About/About";
import Login from "./components/Pages/Login/Login";
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/myBooking">
					<MyBooking />
				</Route>
				<Route path="/manageBooking">
					<ManageBooking />
				</Route>
				<Route path="/addPackage">
					<AddPackage />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;