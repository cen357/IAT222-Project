import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUI from "../../../../../assets/app/navigationUI_side_only.png";
import LeftNormalBackground from "../../../../../assets/app/purple/normal/left/left_normal_background.png";
import { motion } from "framer-motion";

function LeftNormalPurple(props) {
	//******************************************************************************//
	// Hooks
	//******************************************************************************//
	const [backgroundActive, setBackgroundActive] = useState(0);
	const [animationActive, setAnimationActive] = useState(0);

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
		alert(
			`You clicked on ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		);
		console.log("clicked area" + area.name);
		switch (area.name) {
			case "object":
				setAnimationActive(1);
				setTimeout(() => {
					setAnimationActive(0);
				}, 5000);
				break;
			// Navigation UI
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

	const handleImageClick = (event) => {
		const coords = {
			x: event.nativeEvent.layerX,
			y: event.nativeEvent.layerY,
		};
		alert(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
		console.log("clicked image");
	};

	const handleMouseEnterArea = (area) => {
		console.log("entered area");
	};

	const handleMouseLeaveArea = (area) => {
		console.log("leaved area");
	};

	//******************************************************************************//
	// Routing handlers
	//******************************************************************************//

	const handleLeft = () => {
		// turn background off
		setBackgroundActive(0);
		// Play transition video
		// Redirect
		setTimeout(() => {
			props.history.push({
				pathname: "/streetView/locations/purple/normal/back",
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
				pathname: "/streetView/locations/purple/normal/front",
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
					src={LeftNormalBackground}
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
						onMouseEnter={handleMouseEnterArea}
						onMouseLeave={handleMouseLeaveArea}
						onImageClick={handleImageClick}
					/>
				</div>
			</div>
			<div style={{ paddingTop: "800px" }}></div>
		</motion.div>
	);
}

export default LeftNormalPurple;
