import { motion } from "framer-motion";
import React from "react";

function streetView(props) {
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
		props.history.push("/streetView/locations/blue/normal/front");

	return (
		<motion.div
			initial="out"
			animate="in"
			exit="in"
			variants={pageVariants}
			transition={pageTransition}>
			<div className="container">
				<div className="d-flex flex-column">
					<div>Content</div>
				</div>
				<button
					type="button"
					onClick={handleStart}
					className="btn btn-secondary">
					Start
				</button>
			</div>
		</motion.div>
	);
}

export default streetView;
