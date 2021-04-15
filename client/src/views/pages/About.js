import React from "react";
import "react-multi-carousel/lib/styles.css";
import ImageSlider from "../../components/pages/ImageSlider";
import AboutIllustration from "../../assets/img/AboutPage Illustration.png";
import AboutBackground from "../../assets/img/about.png";
import { motion } from "framer-motion";

function About() {
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

	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}>
			<div className="container">
				<img
					src={AboutBackground}
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
				<div className="d-flex justify-content-between pt-5">
					<div className="px-5 ml-5">
						<h1>Our goal</h1>
						<p>
							Not only is Chinatown a location close to many of us
							here in Vancouver, but it is in fact the site of
							many recent anti-Asian hate crimes as well. In fact,
							the climax of our artwork experience centers around
							recreating a true event in the very same location in
							the virtual city block as it did in real life. The
							primary conceptual goal of our artwork is
							ideological in nature, and is to reveal the
							seriousness and ever-growing scale of the issue of
							anti-Asian racist incidents especially in the wake
							of COVID-19, in a manner that might put the user in
							the shoes of an Asian person, if only for a moment.
						</p>
					</div>
					<div className="px-5"></div>
					<div className="px-5 mr-5">
						<img
							src={AboutIllustration}
							alt="cat"
							height="300"
							width="300"
						/>
					</div>
				</div>

				<div className="d-flex flex-column ml-5 px-5">
					<h1>Our team</h1>
					<p></p>
					<ImageSlider />
				</div>
			</div>
		</motion.div>
	);
}

export default About;
