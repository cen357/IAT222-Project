import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUI from "../../../../../assets/app/navigationUI.png";
import RightNormalBackground from "../../../../../assets/app/green/normal/right/right_normal_background.png";
import { motion } from "framer-motion";

function RightNormalGreen(props) {
	//******************************************************************************//
	// Hooks
	//******************************************************************************//
	const [backgroundActive, setBackgroundActive] = useState(0);
	const [animationCount, setAnimationCount] = useState(
		props.location.state.animationCount
	);
	let temp = props.location.state.animationLock;

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
				lineWidth: 1,
				preFillColor: "red",
				strokeColor: "#6afd09",
			},
			{
				name: "move_left",
				shape: "poly",
				coords: [25, 371, 65, 344, 65, 398],
				lineWidth: 1,
				preFillColor: "green",
				strokeColor: "#6afd09",
			},
			{
				name: "move_right",
				shape: "poly",
				coords: [957, 357, 997, 384, 957, 410],
				lineWidth: 1,
				preFillColor: "blue",
				strokeColor: "#6afd09",
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

	const handleImageClick = (event) => {
		const coords = {
			x: event.nativeEvent.layerX,
			y: event.nativeEvent.layerY,
		};
		setAnimationCount(animationCount + 1);
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
		setBackgroundActive(0);
		props.history.push("/streetView/locations/green/normal/front");
	};

	const handleForward = () => {
		setBackgroundActive(0);
		setTimeout(() => {
			props.history.push({
				pathname: "/streetView/locations/blue/normal/front",
				state: {
					animationCount,
					temp,
				},
			});
		}, 2000);
	};

	const handleRight = () => {
		setBackgroundActive(0);
		props.history.push("/streetView/locations/green/normal/back");
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

				{/* Qr Codes */}

				{/* User Interface */}
				<div
					id="mask"
					style={{
						position: "absolute",
						zIndex: 3,
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
						lineWidth={4}
						strokeColor={"white"}
					/>
				</div>
			</div>
			<div style={{ paddingTop: "800px" }}>
				animationCount = {animationCount}
			</div>
		</motion.div>
	);
}

export default RightNormalGreen;
