import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUI from "../../../../../assets/app/navigationUI.png";
import useSound from "use-sound";
import ProgressiveImage from "react-progressive-image-loading";
import FrontNormalBackground from "../../../../../assets/app/green/normal/front/front_normal_background.png";
import FrontNormalBackgroundPreview from "../../../../../assets/app/green/normal/front/front_normal_background_preview.png";
import { motion } from "framer-motion";
import BlueToGreenTransition from "../../../../../assets/app/blue/normal/front/blue_to_green_transition.mp4";

function FrontNormalGreen(props) {
	// State declaration
	const [viewActive, setViewActive] = useState(0);
	const transitionEffectRef = useRef(null);

	// Animation variables declaration
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
		duration: 1,
	};

	// Image map areas
	const MALL = {
		name: "mall",
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

	//Event handlers
	const handleLoad = () => {
		setTimeout(() => {
			setViewActive(1);
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
		alert(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
		console.log("clicked image");
	};

	const handleMouseEnterArea = (area) => {
		console.log("entered area");
	};

	const handleMouseLeaveArea = (area) => {
		console.log("leaved area");
	};

	// Redirect handlers
	const handleLeft = () => props.history.push("/streetView");
	const handleForward = () => props.history.push("/streetView");
	const handleRight = () => props.history.push("/streetView");

	return (
		<motion.div
			initial="in"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}>
			<div className="container">
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
				<div
					id="background"
					alt="background"
					width="1024"
					height="768"
					style={{
						position: "absolute",
						zIndex: 1,
						opacity: 1,
					}}>
					<ProgressiveImage
						preview={FrontNormalBackgroundPreview}
						src={FrontNormalBackground}
						transitionTime={500}
						transitionFunction="ease"
						render={(src, style) => (
							<img src={src} style={style} alt="background" />
						)}
					/>
				</div>

				<div
					id="mask"
					style={{
						position: "absolute",
						zIndex: 1,
						opacity: viewActive,
					}}>
					<ImageMapper
						src={NavigationUI}
						map={MALL}
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
		</motion.div>
	);
}

export default FrontNormalGreen;
