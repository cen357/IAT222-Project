import React from "react";

function ContactForm() {
	return (
		<div className="d-flex flex-row ml-5 px-5 pb-5">
			<div className="mt-5 border-top border-left border-bottom border-danger">
				<div className="text-center mt-5">
					<h1>Contact details</h1>
				</div>
				<div className="form-row mt-5 px-5 mb-4">
					<div className="col">
						<input
							type="text"
							className="form-control"
							placeholder="First Name"
						/>
					</div>
					<div className="col">
						<input
							type="text"
							className="form-control"
							placeholder="Last Name"
						/>
					</div>
				</div>
				<div className="form-row px-5 mb-4">
					<input
						type="text"
						className="form-control"
						placeholder="Email Address"
					/>
				</div>
				<div className="form-row px-5 mb-4">
					<input
						type="text"
						className="form-control"
						placeholder="Your Question"
					/>
				</div>
				<div className="form-row px-5 mb-4">
					<button type="submit" class="btn btn-primary mb-2">
						Submit
					</button>
				</div>
			</div>

			<div className="px-5 mt-5 border-top border-bottom border-danger"></div>

			<div className="mr-5 mt-5 px-5 border bg-danger border-danger text-white">
				<div className="text-center mt-5">
					<h1>Available Time</h1>
				</div>
				<div className="mt-5 text-center">
					<p>Thursday</p>
					<p>Saturday</p>
					<p>Sunday</p>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
