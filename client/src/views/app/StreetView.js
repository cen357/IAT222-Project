import { motion } from "framer-motion";
import React, { useState } from "react";

function StreetView(props) {
	const [animationCount, setAnimationCount] = useState(0);
	const [violentPopup1Lock, setviolentPopup1Lock] = useState(0);
	const [violentPopup2Lock, setviolentPopup2Lock] = useState(0);
	const [poster1Lock, setPoster1Lock] = useState(0);
	const [poster2Lock, setPoster2Lock] = useState(0);
	const [poster3Lock, setPoster3Lock] = useState(0);
	const [poster4Lock, setPoster4Lock] = useState(0);
	const [poster5Lock, setPoster5Lock] = useState(0);
	const [poster6Lock, setPoster6Lock] = useState(0);
	const [poster7Lock, setPoster7Lock] = useState(0);
	const [poster8Lock, setPoster8Lock] = useState(0);
	const [poster9Lock, setPoster9Lock] = useState(0);
	const [poster10Lock, setPoster10Lock] = useState(0);
	const [poster11Lock, setPoster11Lock] = useState(0);
	const [poster12Lock, setPoster12Lock] = useState(0);
	const [poster13Lock, setPoster13Lock] = useState(0);
	const [poster14Lock, setPoster14Lock] = useState(0);
	const [poster15Lock, setPoster15Lock] = useState(0);
	const [poster16Lock, setPoster16Lock] = useState(0);
	const [poster17Lock, setPoster17Lock] = useState(0);
	const [poster18Lock, setPoster18Lock] = useState(0);
	const [poster19Lock, setPoster19Lock] = useState(0);
	const [poster20Lock, setPoster20Lock] = useState(0);
	const [poster21Lock, setPoster21Lock] = useState(0);
	const [poster22Lock, setPoster22Lock] = useState(0);
	const [poster23Lock, setPoster23Lock] = useState(0);
	const [poster24Lock, setPoster24Lock] = useState(0);
	const [poster25Lock, setPoster25Lock] = useState(0);
	const [poster26Lock, setPoster26Lock] = useState(0);
	const [poster27Lock, setPoster27Lock] = useState(0);
	const [poster28Lock, setPoster28Lock] = useState(0);
	const [poster29Lock, setPoster29Lock] = useState(0);
	const [poster30Lock, setPoster30Lock] = useState(0);
	const [poster31Lock, setPoster31Lock] = useState(0);

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
				<div>
					animationCount = {animationCount}
					animationLock = {animationLock}
				</div>
			</div>
		</motion.div>
	);
}

export default StreetView;
