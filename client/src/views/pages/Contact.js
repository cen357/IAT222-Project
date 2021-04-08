import React from "react";
import ContactForm from "../../components/pages/ContactForm";

function Contact() {
	return (
		<div className="container">
			<div className="d-flex flex-column ml-5 pl-5 pt-5 pb-5">
				<h1>Ask us anything</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Magni temporibus suscipit adipisci. Recusandae sit aliquam
					asperiores laboriosam consectetur, nobis sequi cupiditate
					odit alias quis eaque ea labore perferendis adipisci rem!
				</p>
			</div>
			<ContactForm />
		</div>
	);
}

export default Contact;
