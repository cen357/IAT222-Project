import React from "react";
import HomeIllustration from "../../assets/img/Group_103.png";
import { motion } from "framer-motion";
import HomeBackground from "../../assets/img/home.png";

function Home(props) {
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
		duration: 0.3,
	};

	const handleStart = () => props.history.push("/streetView");

	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
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
				<div className="d-flex flex-row mt-5 pb-5">
					<div className="p-5">
						<img
							src={HomeIllustration}
							alt="home"
							height="800"
							width="400"
						/>
					</div>
					<div className="p-3"></div>
					<div className="p-5">
						<h1>Virtual reality walk in Chinatown</h1>
						<p>
							"The reality of Chinatown" is an interactive web app
							that simulates the city blocks and streets of
							Vancouver Chinatown. Amid the waves of COVID-19,
							many people are unaware of racism incidents against
							Asians living in the West. What if Chinatown decided
							to give you a virtual tour about incidents happening
							around the world?
						</p>
						<div className="btn-group">
							<button
								type="button"
								onClick={handleStart}
								className="btn btn-secondary rounded-pill font-weight-bold py-2 px-4 text-white	bg-primary">
								Click to Start
							</button>
							<img src="" alt="" />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Home;
