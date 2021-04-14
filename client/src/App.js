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
import RightNormalGreen from "./views/app/locations/green/normal/RightNormalGreen";
import BackNormalGreen from "./views/app/locations/green/normal/BackNormalGreen";
import LeftNormalGreen from "./views/app/locations/green/normal/LeftNormalGreen";
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
		<footer id="footer">
			<strong>Copyright @ Cow Gang</strong>
			<div>IAT222: Interactive Arts</div>
			<div>Instructor: Mahsoo Salimi</div>
			<div>TA: Akansha Ghosh</div>
		</footer>
	);
}

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg justify-content-between mt-4 mb-5 h5">
			<div className="container">
				<div className="p-0">
					<NavLink
						exact
						className="nav-link"
						activeClassName="active"
						to="/">
						<img
							className="d-inline-block align-top"
							src={Logo}
							alt="logo"
							width="80"
							height="65"
						/>
						<span id="nav-logo" className="pl-2">
							COW GANG
						</span>
					</NavLink>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item pl-5">
						<NavLink
							exact
							className="nav-link"
							activeClassName="active"
							to="/">
							<span id="nav-item">Home</span>
						</NavLink>
					</li>
					<li className="nav-item pl-5">
						<NavLink
							exact
							className="nav-link"
							activeClassName="active"
							to="/about">
							<span id="nav-item">About</span>
						</NavLink>
					</li>
					<li className="nav-item pl-5">
						<NavLink
							exact
							className="nav-link"
							activeClassName="active"
							to="/contact">
							<span id="nav-item">Contact</span>
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
				<Route
					exact
					path="/streetView/locations/green/normal/right"
					component={RightNormalGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/normal/back"
					component={BackNormalGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/normal/left"
					component={LeftNormalGreen}
				/>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
