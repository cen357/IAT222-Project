import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUI from "../../../../../assets/app/navigationUI.png";
import RightNormalBackground from "../../../../../assets/app/purple/normal/right/right_normal_background.png";
import PurpleToGreenTransition from "../../../../../assets/app/purple/normal/right/purple_to_green_transition.mp4";
import { motion } from "framer-motion";
import GifPlayer from "react-gif-player";
import Glitch from "../../../../../assets/app/glitch.gif";
import Graffiti from "../../../../../assets/graffiti.mp4";
import End from "../../../../../assets/graffiti endscreen.png";

function RightNormalPurple(props) {
	//******************************************************************************//
	// Hooks
	//******************************************************************************//
	const [backgroundActive, setBackgroundActive] = useState(0);
	const [glitch, setGlitch] = useState(0);
	const [popup1, setPopup1] = useState(0);
	const [popup2, setPopup2] = useState(0);
	const [end, setEnd] = useState(0);
	const [graffiti, setGraffiti] = useState(0);
	const forwardRef = useRef(null);

	//******************************************************************************//
	// Page animation configuration
	//******************************************************************************//
	const pageVariants = {
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};
	const pageTransition = {
		type: "tween",
		ease: "linear",
		duration: 0.2,
	};

	//******************************************************************************//
	// Image map area configuration
	//******************************************************************************//
	const UI = {
		name: "ui",
		areas: [
			{
				name: "move_forward",
				shape: "poly",
				coords: [478, 733, 510, 711, 544, 734],
			},
			{
				name: "move_left",
				shape: "poly",
				coords: [25, 371, 65, 344, 65, 398],
			},
			{
				name: "move_right",
				shape: "poly",
				coords: [957, 357, 997, 384, 957, 410],
			},
			{
				name: "object",
				shape: "rect",
				coords: [425, 233, 530, 273],
			},
			{
				name: "popup1",
				shape: "rect",
				coords: [94, 565, 127, 650],
			},
			{
				name: "popup2",
				shape: "rect",
				coords: [829, 556, 877, 633],
			},
		],
	};

	//******************************************************************************//
	// Event handlers
	//******************************************************************************//
	const handleLoad = () => {
		setTimeout(() => {
			setBackgroundActive(1);
		}, 500);

		console.log("loaded");
	};

	const handleAreaClick = (area) => {
		console.log("clicked area" + area.name);
		switch (area.name) {
			case "object":
				setGlitch(1);
				setTimeout(() => {
					setGlitch(0);
				}, 1000);
				setGraffiti(1);
				setTimeout(() => {
					setGraffiti(0);
				}, 5000);
				setEnd(1);
				setTimeout(() => {
					setEnd(0);
				}, 5000);
				setTimeout(() => {
					props.history.push({
						pathname: "/streetView/",
					});
				}, 12000);

				break;
			// Navigation UI
			case "move_forward":
				handleForward();
				break;
			case "move_left":
				handleLeft();
				break;
			case "move_right":
				handleRight();
				break;
			default:
				break;
		}
	};

	//******************************************************************************//
	// Routing handlers
	//******************************************************************************//
	const handleForward = () => {
		// turn background off
		setBackgroundActive(0);
		// Play transition video
		forwardRef.current.play();
		// Redirect
		setTimeout(() => {
			props.history.push({
				pathname: "/streetView/locations/green/normal/right",
			});
		}, 2000);
	};

	const handleLeft = () => {
		// turn background off
		setBackgroundActive(0);
		// Play transition video
		// Redirect
		setTimeout(() => {
			props.history.push({
				pathname: "/streetView/locations/purple/normal/front",
				state: {},
			});
		}, 0.2);
	};

	const handleRight = () => {
		// turn background off
		setBackgroundActive(0);
		// Play transition video
		// Redirect
		setTimeout(() => {
			props.history.push({
				pathname: "/streetView/locations/purple/normal/back",
			});
		}, 0.2);
	};

	//******************************************************************************//
	// RETURN
	//******************************************************************************//
	return (
		<motion.div
			initial="in"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}>
			<div className="container">
				{/* Transition video */}
				<video
					id="transitionEffect"
					width="1024"
					height="768"
					style={{ position: "absolute", zIndex: 0 }}
					ref={forwardRef}>
					<source
						src={PurpleToGreenTransition}
						type="video/mp4"></source>
				</video>

				{/* Background image*/}
				<img
					id="background"
					src={RightNormalBackground}
					alt="background"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 1,
						opacity: backgroundActive,
					}}
				/>

				{/* Animations */}
				<div
					id="animation"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 4,
						opacity: glitch,
					}}>
					<GifPlayer gif={Glitch} still={Glitch} />
				</div>

				<video
					id="animation"
					width="1024"
					height="768"
					src={Graffiti}
					style={{
						position: "absolute",
						zIndex: 3,
						opacity: graffiti,
					}}></video>

				<div
					id="animation"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 2,
						opacity: 0,
					}}>
					<GifPlayer gif={End} still={End} />
				</div>

				{/* Qr Codes */}

				{/* User Interface */}
				<div
					id="mask"
					style={{
						position: "absolute",
						zIndex: 5,
						opacity: backgroundActive,
					}}>
					<ImageMapper
						src={NavigationUI}
						map={UI}
						width={1024}
						height={768}
						onLoad={handleLoad}
						onClick={handleAreaClick}
					/>
				</div>
			</div>
			<div style={{ paddingTop: "800px" }}></div>
		</motion.div>
	);
}

export default RightNormalPurple;
