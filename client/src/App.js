import React from "react";
import { AnimatePresence } from "framer-motion";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
	useLocation,
} from "react-router-dom";

// Landing pages
import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import StreetView from "./views/app/StreetView";

// location Blue
import FrontNormalBlue from "./views/app/locations/blue/normal/FrontNormalBlue";

//Location Green
import FrontNormalGreen from "./views/app/locations/green/normal/FrontNormalGreen";
import RightNormalGreen from "./views/app/locations/green/normal/RightNormalGreen";
import BackNormalGreen from "./views/app/locations/green/normal/BackNormalGreen";
import LeftNormalGreen from "./views/app/locations/green/normal/LeftNormalGreen";

//Location Red
import FrontNormalRed from "./views/app/locations/red/normal/FrontNormalRed";
import RightNormalRed from "./views/app/locations/red/normal/RightNormalRed";
import BackNormalRed from "./views/app/locations/red/normal/BackNormalRed";
import LeftNormalRed from "./views/app/locations/red/normal/LeftNormalRed";

//Location Orange
import FrontNormalOrange from "./views/app/locations/orange/normal/FrontNormalOrange";
import RightNormalOrange from "./views/app/locations/orange/normal/RightNormalOrange";
import BackNormalOrange from "./views/app/locations/orange/normal/BackNormalOrange";
import LeftNormalOrange from "./views/app/locations/orange/normal/LeftNormalOrange";

//Location Purple
import FrontNormalPurple from "./views/app/locations/purple/normal/FrontNormalPurple";
import RightNormalPurple from "./views/app/locations/purple/normal/RightNormalPurple";
import BackNormalPurple from "./views/app/locations/purple/normal/BackNormalPurple";
import LeftNormalPurple from "./views/app/locations/purple/normal/LeftNormalPurple";

// CSS and assets
import Logo from "./assets/logo/logo.png";
import "./App.css";

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
				{/* Landing pages */}
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/streetView" component={StreetView} />

				{/* Location Blue */}
				<Route
					exact
					path="/streetView/locations/blue/normal/front"
					component={FrontNormalBlue}
				/>

				{/* Location Green */}
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

				{/* Location Red */}
				<Route
					exact
					path="/streetView/locations/red/normal/front"
					component={FrontNormalRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/normal/right"
					component={RightNormalRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/normal/back"
					component={BackNormalRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/normal/left"
					component={LeftNormalRed}
				/>

				{/* Location Orange */}
				<Route
					exact
					path="/streetView/locations/orange/normal/front"
					component={FrontNormalOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/normal/right"
					component={RightNormalOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/normal/back"
					component={BackNormalOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/normal/left"
					component={LeftNormalOrange}
				/>

				{/* Location Purple */}
				<Route
					exact
					path="/streetView/locations/purple/normal/front"
					component={FrontNormalPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/normal/right"
					component={RightNormalPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/normal/back"
					component={BackNormalPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/normal/left"
					component={LeftNormalPurple}
				/>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
