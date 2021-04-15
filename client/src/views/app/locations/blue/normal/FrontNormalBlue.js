import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUIForwardOnly from "../../../../../assets/app/navigationUI_forward_only.png";
import FrontNormalBackground from "../../../../../assets/app/blue/normal/front/front_normal_background.png";
import BlueToGreenTransition from "../../../../../assets/app/blue/normal/front/blue_to_green_transition.mp4";
import { motion } from "framer-motion";

function FrontNormalBlue(props) {
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
				name: "object",
				shape: "rect",
				coords: [],
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
			//Animation
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
				pathname: "/streetView/locations/green/normal/front",
			});
		}, 2000);
	};
	//******************************************************************************//
	// RETURN
	//******************************************************************************//

	return (
		<motion.div
			initial="out"
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
						src={BlueToGreenTransition}
						type="video/mp4"></source>
				</video>

				{/* Background image*/}
				<img
					id="background"
					src={FrontNormalBackground}
					alt="background"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 1,
						opacity: backgroundActive,
					}}
				/>

				<img
					id="animation"
					src={FrontNormalBackground}
					alt="animation"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 2,
						opacity: animationActive,
					}}
				/>

				{/* User Interface */}
				<div
					id="UI-mask"
					style={{
						position: "absolute",
						zIndex: 3,
						opacity: backgroundActive,
					}}>
					<ImageMapper
						src={NavigationUIForwardOnly}
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

export default FrontNormalBlue;
