import React from "react";
import HomeIllustration from "../../assets/img/HomePageIllustration.png";
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
							height="300"
							width="400"
						/>
					</div>
					<div className="p-3"></div>
					<div className="p-5">
						<h1>Virtual reality walk in Chinatown</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Fugit placeat est laboriosam minus saepe quis
							rerum maiores odit? Corrupti dolores eos similique
							quo quidem earum vitae molestiae at nihil quod!
						</p>
						<div className="btn-group">
							<button
								type="button"
								onClick={handleStart}
								className="btn btn-secondary rounded-pill font-weight-bold py-2 px-4 text-white	bg-primary">
								Click to Start
							</button>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Home;
