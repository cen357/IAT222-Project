import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import NavigationUIForwardOnly from "../../../../../assets/app/navigationUI_forward_only.png";
import FrontDarkBackground from "../../../../../assets/app/blue/dark/front/front_dark_background.png";
import BlueToGreenTransition from "../../../../../assets/app/blue/dark/front/blue_to_green_transition.mp4";
import { motion } from "framer-motion";
import GifPlayer from "react-gif-player";
import Glitch from "../../../../../assets/app/glitch.gif";

function FrontDarkBlue(props) {
	//******************************************************************************//
	// Saved states from previous routes
	//******************************************************************************//
	const [animationCount, setAnimationCount] = useState(
		props.location.state.animationCount
	);
	const [violentPopup1Lock, setViolentPopup1Lock] = useState(
		props.location.state.violentPopup1Lock
	);
	const [violentPopup2Lock, setViolentPopup2Lock] = useState(
		props.location.state.violentPopup2Lock
	);
	const [poster1Lock, setPoster1Lock] = useState(
		props.location.state.poster1
	);
	const [poster2Lock, setPoster2Lock] = useState(
		props.location.state.poster2
	);
	const [poster3Lock, setPoster3Lock] = useState(
		props.location.state.poster3
	);
	const [poster4Lock, setPoster4Lock] = useState(
		props.location.state.poster4
	);
	const [poster5Lock, setPoster5Lock] = useState(
		props.location.state.poster5
	);
	const [poster6Lock, setPoster6Lock] = useState(
		props.location.state.poster6
	);
	const [poster7Lock, setPoster7Lock] = useState(
		props.location.state.poster7
	);
	const [poster8Lock, setPoster8Lock] = useState(
		props.location.state.poster8
	);
	const [poster9Lock, setPoster9Lock] = useState(
		props.location.state.poster9
	);
	const [poster10Lock, setPoster10Lock] = useState(
		props.location.state.poster10
	);
	const [poster11Lock, setPoster11Lock] = useState(
		props.location.state.poster11
	);
	const [poster12Lock, setPoster12Lock] = useState(
		props.location.state.poster12
	);
	const [poster13Lock, setPoster13Lock] = useState(
		props.location.state.poster13
	);
	const [poster14Lock, setPoster14Lock] = useState(
		props.location.state.poster14
	);
	const [poster15Lock, setPoster15Lock] = useState(
		props.location.state.poster15
	);
	const [poster16Lock, setPoster16Lock] = useState(
		props.location.state.poster16
	);
	const [poster17Lock, setPoster17Lock] = useState(
		props.location.state.poster17
	);
	const [poster18Lock, setPoster18Lock] = useState(
		props.location.state.poster18
	);
	const [poster19Lock, setPoster19Lock] = useState(
		props.location.state.poster19
	);
	const [poster20Lock, setPoster20Lock] = useState(
		props.location.state.poster20
	);
	const [poster21Lock, setPoster21Lock] = useState(
		props.location.state.poster21
	);
	const [poster22Lock, setPoster22Lock] = useState(
		props.location.state.poster22
	);
	const [poster23Lock, setPoster23Lock] = useState(
		props.location.state.poster23
	);
	const [poster24Lock, setPoster24Lock] = useState(
		props.location.state.poster24
	);
	const [poster25Lock, setPoster25Lock] = useState(
		props.location.state.poster25
	);
	const [poster26Lock, setPoster26Lock] = useState(
		props.location.state.poster26
	);
	const [poster27Lock, setPoster27Lock] = useState(
		props.location.state.poster27
	);
	const [poster28Lock, setPoster28Lock] = useState(
		props.location.state.poster28
	);
	const [poster29Lock, setPoster29Lock] = useState(
		props.location.state.poster29
	);
	const [poster30Lock, setPoster30Lock] = useState(
		props.location.state.poster30
	);
	const [poster31Lock, setPoster31Lock] = useState(
		props.location.state.poster31
	);

	//******************************************************************************//
	// Hooks
	//******************************************************************************//
	const [backgroundActive, setBackgroundActive] = useState(0);
	const [glitch, setGlitch] = useState(0);
	const forwardRef = useRef(null);

	useEffect(() => {
		if (animationCount >= 10) {
			setGlitch(1);
			setTimeout(() => {
				setGlitch(0);
				handleGlitch();
			}, 1000);
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
				name: "move_forward",
				shape: "poly",
				coords: [478, 733, 510, 711, 544, 734],
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
			//Animation
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
	const handleForward = () => {
		// turn background off
		setBackgroundActive(0);
		// Play transition video
		forwardRef.current.play();
		// Redirect
		setTimeout(() => {
			props.history.push({
				pathname: "/streetView/locations/green/dark/front",
				state: {
					animationCount,
					violentPopup1Lock,
					violentPopup2Lock,
					poster1Lock,
					poster2Lock,
					poster3Lock,
					poster4Lock,
					poster5Lock,
					poster6Lock,
					poster7Lock,
					poster8Lock,
					poster9Lock,
					poster10Lock,
					poster11Lock,
					poster12Lock,
					poster13Lock,
					poster14Lock,
					poster15Lock,
					poster16Lock,
					poster17Lock,
					poster18Lock,
					poster19Lock,
					poster20Lock,
					poster21Lock,
					poster22Lock,
					poster23Lock,
					poster24Lock,
					poster25Lock,
					poster26Lock,
					poster27Lock,
					poster28Lock,
					poster29Lock,
					poster30Lock,
					poster31Lock,
				},
			});
		}, 2000);
	};

	const handleGlitch = () => {
		setBackgroundActive(0);
		props.history.push({
			pathname: "/streetView/locations/blue/dark/front",
			state: {
				animationCount,
				violentPopup1Lock,
				violentPopup2Lock,
				poster1Lock,
				poster2Lock,
				poster3Lock,
				poster4Lock,
				poster5Lock,
				poster6Lock,
				poster7Lock,
				poster8Lock,
				poster9Lock,
				poster10Lock,
				poster11Lock,
				poster12Lock,
				poster13Lock,
				poster14Lock,
				poster15Lock,
				poster16Lock,
				poster17Lock,
				poster18Lock,
				poster19Lock,
				poster20Lock,
				poster21Lock,
				poster22Lock,
				poster23Lock,
				poster24Lock,
				poster25Lock,
				poster26Lock,
				poster27Lock,
				poster28Lock,
				poster29Lock,
				poster30Lock,
				poster31Lock,
			},
		});
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
					src={FrontDarkBackground}
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
						opacity: glitch,
					}}>
					<GifPlayer gif={Glitch} still={Glitch} />
				</div>

				{/* QR codes */}

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

export default FrontDarkBlue;
