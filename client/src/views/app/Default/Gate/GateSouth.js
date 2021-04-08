import React, { useState, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import GateSouthBackground from "../../../../assets/app/gate/default/south/south-gate-background.JPG";
import GateSouthHover from "../../../../assets/app/gate/default/south/south-gate-hover.png";
import GateSouthAnimation from "../../../../assets/app/gate/default/south/dark-south-gate-background.png";
import "./Gate.css";

function GateSouth(props) {
	const [hover, setHover] = useState(0);
	const [animation, setAnimation] = useState(0);
	const [animationCount, setAnimationCount] = useState(0);

	// Image map areas
	const GATE = {
		name: "gate-south",
		areas: [
			{
				name: "gate-sign",
				shape: "rect",
				coords: [461, 466, 508, 531],
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
			case "gate-sign":
				setAnimation(1);
				setAnimationCount(animationCount + 1);
				break;

			default:
				setAnimation(0);
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
		setAnimation(0);
	};

	const handleMouseEnterArea = (area) => {
		console.log("entered area");
		setHover(1);
	};

	const handleMouseLeaveArea = (area) => {
		console.log("leaved area");
		setHover(0);
	};

	// Redirect handlers
	const handleLeft = () => props.history.push("/streetView/gateRight");
	const handleForward = () => props.history.push("/");
	const handleRight = () => props.history.push("/streetView/gateLeft");
	const handleSouth = () => props.history.push("/streetView/gateFront");

	return (
		<div className="container">
			<div className="images">
				<img
					id="background"
					src={GateSouthBackground}
					alt="background"
					width="1024"
					height="768"
				/>
				<img
					id="hover"
					src={GateSouthHover}
					alt="hover"
					width="1024"
					height="768"
					style={{ opacity: hover }}
				/>
				<img
					id="animation"
					src={GateSouthAnimation}
					alt="animation"
					width="1024"
					height="768"
					style={{ opacity: animation }}
				/>

				<div id="mask">
					<ImageMapper
						src={GateSouthBackground}
						map={GATE}
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

			<div id="test-button" className="btn-group">
				<button
					type="button"
					onClick={handleLeft}
					className="btn btn-secondary">
					Left button
				</button>
				<button
					type="button"
					onClick={handleForward}
					className="btn btn-primary">
					Forward button
				</button>
				<button
					type="button"
					onClick={handleRight}
					className="btn btn-secondary">
					Right button
				</button>
				<button
					type="button"
					onClick={handleSouth}
					className="btn btn-danger">
					South button
				</button>
				<div>Animation Count = {animationCount}</div>
			</div>
		</div>
	);
}

export default GateSouth;
