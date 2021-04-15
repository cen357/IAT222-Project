import { motion } from "framer-motion";
import React, { useState } from "react";

function StreetView(props) {
	const [animationCount, setAnimationCount] = useState(0);
	const [animationLock, setAnimationLock] = useState(0);

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
			state: {
				animationCount,
				animationLock,
			},
		});

	return (
		<motion.div
			initial="out"
			animate="in"
			exit="in"
			variants={pageVariants}
			transition={pageTransition}>
			<div className="container">
				<div className="d-flex flex-column">
					<div>Credits</div>
				</div>
				<button
					type="button"
					onClick={handleStart}
					className="btn btn-secondary">
					Restart
				</button>
				<div>
					animationCount = {animationCount}
					animationLock = {animationLock}
				</div>
			</div>
		</motion.div>
	);
}

export default StreetView;
