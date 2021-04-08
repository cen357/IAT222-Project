import React from "react";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
} from "react-router-dom";
import "./App.css";
import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import StreetView from "./views/app/StreetView";
import GateFront from "./views/app/Default/Gate/GateFront";
import GateLeft from "./views/app/Default/Gate/GateLeft";
import GateRight from "./views/app/Default/Gate/GateRight";
import GateSouth from "./views/app/Default/Gate/GateSouth";
import Logo from "./assets/logos/placeholder.com-logo1.jpg";

class App extends React.Component {
	render() {
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
							width="100"
							height="30"
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
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/streetView" component={StreetView} />
			<Route exact path="/streetView/gateFront" component={GateFront} />
			<Route exact path="/streetView/gateLeft" component={GateLeft} />
			<Route exact path="/streetView/gateRight" component={GateRight} />
			<Route exact path="/streetView/gateSouth" component={GateSouth} />
		</Switch>
	);
}

export default App;
