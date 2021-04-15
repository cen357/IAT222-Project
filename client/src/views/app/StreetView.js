import { motion } from "framer-motion";
import React, { useState } from "react";
import HomeBackground from "../../assets/img/home.png";
import Tutorial from "../../assets/img/tutorial.png";

function StreetView(props) {
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

	const handleStart = () =>
		props.history.push({
			pathname: "/streetView/locations/blue/normal/front",
		});

	return (
		<motion.div
			initial="out"
			animate="in"
			exit="in"
			variants={pageVariants}
			transition={pageTransition}>
			<div className="container">
				<img
					src={HomeBackground}
					alt="background"
					style={{
						height: "100%",
						width: "100%",
						size: "cover",
						position: "fixed",
						top: 0,
						left: 0,
						zIndex: -1,
					}}
				/>

				<button
					type="button"
					onClick={handleStart}
					className="btn btn-primary">
					Start
				</button>
			</div>
		</motion.div>
	);
}

export default StreetView;
