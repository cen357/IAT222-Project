import { motion } from "framer-motion";
import React from "react";
import ContactForm from "../../components/pages/ContactForm";
import ContactTopBackground from "../../assets/img/contact-top.png";
import ContactBackground from "../../assets/img/contact.png";

function Contact() {
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
			<img
				src={ContactTopBackground}
				alt="background"
				style={{
					height: "500px",
					width: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -1,
				}}
			/>
			<div className="container">
				<div className="d-flex flex-row ml-5 pl-5">
					<div className="d-flex flex-column">
						<h1 className="text-white">Ask us anything</h1>
						<p></p>
					</div>
					<div className="px-5 mx-5"></div>
					<div className="px-5 mx-5"></div>
					<div className="px-5 mx-5"></div>
					<div className="px-5 mx-2"></div>
				</div>
				<ContactForm />
			</div>
			<img
				src={ContactBackground}
				alt="background"
				style={{
					left: 0,
					height: "200px",
					width: "100%",
					position: "absolute",
					zIndex: -1,
				}}
			/>
		</motion.div>
	);
}

export default Contact;
