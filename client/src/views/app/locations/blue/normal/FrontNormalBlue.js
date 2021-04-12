import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import useSound from "use-sound";
import ProgressiveImage from "react-progressive-image-loading";
import NavigationUIForwardOnly from "../../../../../assets/app/navigationUI_forward_only.png";
import FrontNormalBackground from "../../../../../assets/app/blue/normal/front/front_normal_background.png";
import BlueToGreenTransition from "../../../../../assets/app/blue/normal/front/blue_to_green_transition.mp4";
import CatSound from "../../../../../assets/app/blue/normal/front/cat.mp3";
import { motion } from "framer-motion";

function FrontNormalBlue(props) {
	// State declaration
	const [viewActive, setViewActive] = useState(1);
	const transitionEffectRef = useRef(null);
	const [play, { stop }] = useSound(CatSound);

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

	//Event handlers
	const handleLoad = () => console.log("loaded");

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

	// Redirect handlers
	const handleForward = () => {
		setViewActive(0);
		transitionEffectRef.current.play();
		setTimeout(() => {
			props.history.push("/streetView/locations/green/normal/front");
		}, 1000);
	};

	return (
		<motion.div
			initial="out"
			animate="in"
			exit="in"
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
						opacity: viewActive,
					}}>
					<ProgressiveImage
						preview={FrontNormalBackground}
						src={FrontNormalBackground}
						render={(src, style) => (
							<img src={src} style={style} alt="background" />
						)}
					/>
				</div>

				<div
					id="mask"
					style={{
						position: "absolute",
						zIndex: 2,
						opacity: viewActive,
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
		</motion.div>
	);
}

export default FrontNormalBlue;