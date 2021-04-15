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
import End from "./views/app/End";
import Credits from "./views/app/Credits";

//******************************************************************************//
//  Normal Mode
//******************************************************************************//
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

//******************************************************************************//
// Light mode
//******************************************************************************//

// location Blue
import FrontLightBlue from "./views/app/locations/blue/light/FrontLightBlue";

//Location Green
import FrontLightGreen from "./views/app/locations/green/light/FrontLightGreen";
import RightLightGreen from "./views/app/locations/green/light/RightLightGreen";
import BackLightGreen from "./views/app/locations/green/light/BackLightGreen";
import LeftLightGreen from "./views/app/locations/green/light/LeftLightGreen";

//Location Red
import FrontLightRed from "./views/app/locations/red/light/FrontLightRed";
import RightLightRed from "./views/app/locations/red/light/RightLightRed";
import BackLightRed from "./views/app/locations/red/light/BackLightRed";
import LeftLightRed from "./views/app/locations/red/light/LeftLightRed";

//Location Orange
import FrontLightOrange from "./views/app/locations/orange/light/FrontLightOrange";
import RightLightOrange from "./views/app/locations/orange/light/RightLightOrange";
import BackLightOrange from "./views/app/locations/orange/light/BackLightOrange";
import LeftLightOrange from "./views/app/locations/orange/light/LeftLightOrange";

//Location Purple
import FrontLightPurple from "./views/app/locations/purple/light/FrontLightPurple";
import RightLightPurple from "./views/app/locations/purple/light/RightLightPurple";
import BackLightPurple from "./views/app/locations/purple/light/BackLightPurple";
import LeftLightPurple from "./views/app/locations/purple/light/LeftLightPurple";

//******************************************************************************//
// Dark mode
//******************************************************************************//

// location Blue
import FrontDarkBlue from "./views/app/locations/blue/dark/FrontDarkBlue";

//Location Green
import FrontDarkGreen from "./views/app/locations/green/dark/FrontDarkGreen";
import RightDarkGreen from "./views/app/locations/green/dark/RightDarkGreen";
import BackDarkGreen from "./views/app/locations/green/dark/BackDarkGreen";
import LeftDarkGreen from "./views/app/locations/green/dark/LeftDarkGreen";

//Location Red
import FrontDarkRed from "./views/app/locations/red/dark/FrontDarkRed";
import RightDarkRed from "./views/app/locations/red/dark/RightDarkRed";
import BackDarkRed from "./views/app/locations/red/dark/BackDarkRed";
import LeftDarkRed from "./views/app/locations/red/dark/LeftDarkRed";

//Location Orange
import FrontDarkOrange from "./views/app/locations/orange/dark/FrontDarkOrange";
import RightDarkOrange from "./views/app/locations/orange/dark/RightDarkOrange";
import BackDarkOrange from "./views/app/locations/orange/dark/BackDarkOrange";
import LeftDarkOrange from "./views/app/locations/orange/dark/LeftDarkOrange";

//Location Purple
import FrontDarkPurple from "./views/app/locations/purple/dark/FrontDarkPurple";
import RightDarkPurple from "./views/app/locations/purple/dark/RightDarkPurple";
import BackDarkPurple from "./views/app/locations/purple/dark/BackDarkPurple";
import LeftDarkPurple from "./views/app/locations/purple/dark/LeftDarkPurple";

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
				<Route exact path="/end" component={End} />
				<Route exact path="/credits" component={Credits} />

				{/********************************************* */}
				{/******************NORMAL MODE**************** */}
				{/********************************************* */}

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
				{/********************************************* */}
				{/******************LIGHT MODE***************** */}
				{/********************************************* */}

				{/* Location Blue */}
				<Route
					exact
					path="/streetView/locations/blue/light/front"
					component={FrontLightBlue}
				/>

				{/* Location Green */}
				<Route
					exact
					path="/streetView/locations/green/light/front"
					component={FrontLightGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/light/right"
					component={RightLightGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/light/back"
					component={BackLightGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/light/left"
					component={LeftLightGreen}
				/>

				{/* Location Red */}
				<Route
					exact
					path="/streetView/locations/red/light/front"
					component={FrontLightRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/light/right"
					component={RightLightRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/light/back"
					component={BackLightRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/light/left"
					component={LeftLightRed}
				/>

				{/* Location Orange */}
				<Route
					exact
					path="/streetView/locations/orange/light/front"
					component={FrontLightOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/light/right"
					component={RightLightOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/light/back"
					component={BackLightOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/light/left"
					component={LeftLightOrange}
				/>

				{/* Location Purple */}
				<Route
					exact
					path="/streetView/locations/purple/light/front"
					component={FrontLightPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/light/right"
					component={RightLightPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/light/back"
					component={BackLightPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/light/left"
					component={LeftLightPurple}
				/>

				{/********************************************* */}
				{/******************DARK MODE***************** */}
				{/********************************************* */}

				{/* Location Blue */}
				<Route
					exact
					path="/streetView/locations/blue/dark/front"
					component={FrontDarkBlue}
				/>

				{/* Location Green */}
				<Route
					exact
					path="/streetView/locations/green/dark/front"
					component={FrontDarkGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/dark/right"
					component={RightDarkGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/dark/back"
					component={BackDarkGreen}
				/>
				<Route
					exact
					path="/streetView/locations/green/dark/left"
					component={LeftDarkGreen}
				/>

				{/* Location Red */}
				<Route
					exact
					path="/streetView/locations/red/dark/front"
					component={FrontDarkRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/dark/right"
					component={RightDarkRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/dark/back"
					component={BackDarkRed}
				/>
				<Route
					exact
					path="/streetView/locations/red/dark/left"
					component={LeftDarkRed}
				/>

				{/* Location Orange */}
				<Route
					exact
					path="/streetView/locations/orange/dark/front"
					component={FrontDarkOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/dark/right"
					component={RightDarkOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/dark/back"
					component={BackDarkOrange}
				/>
				<Route
					exact
					path="/streetView/locations/orange/dark/left"
					component={LeftDarkOrange}
				/>

				{/* Location Purple */}
				<Route
					exact
					path="/streetView/locations/purple/dark/front"
					component={FrontDarkPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/dark/right"
					component={RightDarkPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/dark/back"
					component={BackDarkPurple}
				/>
				<Route
					exact
					path="/streetView/locations/purple/dark/left"
					component={LeftDarkPurple}
				/>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
