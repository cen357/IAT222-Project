import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import useSound from "use-sound";
import NavigationUIForwardOnly from "../../../../../assets/app/navigationUI_forward_only.png";
import FrontNormalBackground from "../../../../../assets/app/blue/normal/front/front_normal_background.png";
import BlueToGreenTransition from "../../../../../assets/app/blue/normal/front/blue_to_green_transition.mp4";
import CatSound from "../../../../../assets/app/blue/normal/front/cat.mp3";
import { motion } from "framer-motion";

function FrontNormalBlue(props) {
	//******************************************************************************//
	// Hooks
	//******************************************************************************//
	const [backgroundActive, setBackgroundActive] = useState(0);
	const [animationCount, setAnimationCount] = useState(
		props.location.state.animationCount
	);
	const transitionEffectRef = useRef(null);
	const [play, { stop }] = useSound(CatSound);

	useEffect(() => {
		if (animationCount >= 3) {
			alert("yeah");
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
	const SHOP_FRONT = {
		name: "shop_front",
		areas: [
			{
				name: "move_forward",
				shape: "poly",
				coords: [478, 733, 510, 711, 544, 734],
				lineWidth: 1,
				preFillColor: "red",
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
		play();
	};

	const handleMouseLeaveArea = (area) => {
		console.log("leaved area");
		stop();
	};

	//******************************************************************************//
	// Routing handlers
	//******************************************************************************//
	const handleForward = () => {
		// turn background off
		setBackgroundActive(0);
		// Play transition video
		transitionEffectRef.current.play();
		// Redirect
		setTimeout(() => {
			props.history.push({
				pathname: "/streetView/locations/green/normal/front",
				state: {
					animationCount,
				},
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
					ref={transitionEffectRef}>
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

				{/* Animations */}

				{/* QR codes */}

				{/* User Interface */}
				<div
					id="UI-mask"
					style={{
						position: "absolute",
						zIndex: 2,
						opacity: backgroundActive,
					}}>
					<ImageMapper
						src={NavigationUIForwardOnly}
						map={SHOP_FRONT}
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

export default FrontNormalBlue;
