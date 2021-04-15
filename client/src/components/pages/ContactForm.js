import React from "react";

function ContactForm() {
	return (
		<div className="d-flex flex-row ml-5 px-5 pb-5 ">
			<div className="mt-5 border-top border-left border-bottom bg-white rounded shadow-lg">
				<div className="text-center mt-5">
					<h1>Contact details</h1>
				</div>
				<div className="form-row mt-5 px-5 mb-4">
					<div className="col">
						<input
							type="text"
							className="form-control border rounded-pill"
							placeholder="First Name"
						/>
					</div>
					<div className="col">
						<input
							type="text"
							className="form-control border rounded-pill"
							placeholder="Last Name"
						/>
					</div>
				</div>
				<div className="form-row px-5 mb-4">
					<input
						type="text"
						className="form-control border rounded-pill"
						placeholder="Email Address"
					/>
				</div>
				<div className="form-row px-5 mb-4">
					<input
						type="text"
						className="form-control border rounded-pill"
						placeholder="Your Question"
					/>
				</div>
				<div className="form-row px-5 mb-4">
					<button
						type="submit"
						className="btn btn-primary mb-2 rounded-pill px-3 py-2">
						Submit
					</button>
				</div>
			</div>

			<div
				className="mr-5 mt-5 px-5 border text-white rounded shadow-lg"
				style={{ backgroundColor: "#802828" }}>
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
