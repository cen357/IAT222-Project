import React from "react";
import { AnimatePresence } from "framer-motion";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
	useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import StreetView from "./views/app/StreetView";
import FrontNormalBlue from "./views/app/locations/blue/normal/FrontNormalBlue";
import FrontNormalGreen from "./views/app/locations/green/normal/FrontNormalGreen";
import Logo from "./assets/logo/logo.png";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Navigation />
					<div className="container">
						<Main />
					</div>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

function Footer() {
	return (
		<footer className="bg-dark text-center text-white mt-5 p-2">
			<strong>Copyright @ Cow Gang</strong>
			<div>IAT222: Interactive Arts</div>
			<div>Instructor: Mahsoo Salimi</div>
			<div>TA: Akansha Ghosh</div>
		</footer>
	);
}

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar justify-content-between mt-4 mb-5 h5">
			<div className="container">
				<div className="navbar-brand">
					<NavLink
						exact
						className="nav-link"
						activeClassName="active"
						to="/">
						<img
							className="d-inline-block align-top"
							src={Logo}
							alt="logo"
							width="50"
							height="40"
						/>
						Cow Gang
					</NavLink>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item pl-5">
						<NavLink
							exact
							className="nav-link"
							activeClassName="active"
							to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item pl-5">
						<NavLink
							exact
							className="nav-link"
							activeClassName="active"
							to="/about">
							About
						</NavLink>
					</li>
					<li className="nav-item pl-5">
						<NavLink
							exact
							className="nav-link"
							activeClassName="active"
							to="/contact">
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

function Main() {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/streetView" component={StreetView} />
				<Route
					exact
					path="/streetView/locations/blue/normal/front"
					component={FrontNormalBlue}
				/>
				<Route
					exact
					path="/streetView/locations/green/normal/front"
					component={FrontNormalGreen}
				/>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
