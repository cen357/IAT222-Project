import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUI from "../../../../../assets/app/navigationUI.png";
import LeftNormalBackground from "../../../../../assets/app/green/normal/left/left_normal_background.png";
import GreenToPurpleTransition from "../../../../../assets/app/green/normal/left/green_to_purple_transition.mp4";
import { motion } from "framer-motion";
import Poster from "../../../../../assets/posters/poster4.png";

function LeftNormalGreen(props) {
	//******************************************************************************//
	// Hooks
	//******************************************************************************//
	const [backgroundActive, setBackgroundActive] = useState(0);
	const [animationActive, setAnimationActive] = useState(0);
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
				coords: [118, 0, 212, 208],
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
				setAnimationActive(1);
				setTimeout(() => {
					setAnimationActive(0);
				}, 5000);
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
				pathname: "/streetView/locations/purple/normal/left",
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
				pathname: "/streetView/locations/green/normal/back",
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
				pathname: "/streetView/locations/green/normal/front",
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
						src={GreenToPurpleTransition}
						type="video/mp4"></source>
				</video>

				{/* Background image*/}
				<img
					id="background"
					src={LeftNormalBackground}
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
				<img
					id="animation"
					src={Poster}
					alt="animation"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 2,
						opacity: animationActive,
					}}
				/>

				{/* Qr Codes */}

				{/* User Interface */}
				<div
					id="mask"
					style={{
						position: "absolute",
						zIndex: 4,
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

export default LeftNormalGreen;
