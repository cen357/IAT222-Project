import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUISideOnly from "../../../../../assets/app/navigationUI_side_only.png";
import FrontNormalBackground from "../../../../../assets/app/green/normal/front/front_normal_background.png";
import { motion } from "framer-motion";
import GifPlayer from "react-gif-player";
import ViolentPopup1 from "../../../../../assets/app/green/normal/front/violent-popup-1.gif";
import Glitch from "../../../../../assets/app/glitch.gif";

function FrontNormalGreen(props) {
	//******************************************************************************//
	// Hooks
	//******************************************************************************//
	const [backgroundActive, setBackgroundActive] = useState(0);
	const [animationCount, setAnimationCount] = useState(
		props.location.state.animationCount
	);
	const [animation, setAnimation] = useState(0);
	const [glitch, setGlitch] = useState(0);
	let temp = props.location.state.animationLock;
	useEffect(() => {
		if (animationCount >= 10) {
			setGlitch(1);
			setTimeout(() => {
				setGlitch(0);
			}, 1000);
			props.history.push({
				pathname: "/streetView/",
				state: { animationCount },
			});
		}
	}, [animationCount]);

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
			{
				name: "object",
				shape: "rect",
				coords: [345, 409, 474, 493],
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
			case "move_left":
				handleLeft();
				break;
			case "move_right":
				handleRight();
				break;
			case "object":
				setAnimationCount(animationCount + 1);
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

		setAnimation(1);
		setTimeout(() => {
			setAnimation(0);
		}, 6500);
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
		props.history.push("/streetView/locations/green/normal/left");
	};

	const handleRight = () => {
		setBackgroundActive(0);
		props.history.push({
			pathname: "/streetView/locations/green/normal/right",
			state: {
				animationCount,
				temp,
			},
		});
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

				{/* Animations */}
				<div
					id="animation"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 2,
						opacity: animation,
					}}>
					<GifPlayer gif={ViolentPopup1} still={ViolentPopup1} />
				</div>

				<div
					id="animation"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 3,
						opacity: glitch,
					}}>
					<GifPlayer gif={Glitch} still={Glitch} />
				</div>

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
						src={NavigationUISideOnly}
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

export default FrontNormalGreen;
