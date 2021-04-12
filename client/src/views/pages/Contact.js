import { motion } from "framer-motion";
import React from "react";
import ContactForm from "../../components/pages/ContactForm";

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
		duration: 0.5,
	};

	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}>
			<div className="container">
				<div className="d-flex flex-column ml-5 pl-5 pt-5 pb-5">
					<h1>Ask us anything</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Magni temporibus suscipit adipisci. Recusandae sit
						aliquam asperiores laboriosam consectetur, nobis sequi
						cupiditate odit alias quis eaque ea labore perferendis
						adipisci rem!
					</p>
				</div>
				<ContactForm />
			</div>
		</motion.div>
	);
}

export default Contact;
