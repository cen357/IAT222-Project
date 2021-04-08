import React from "react";

function StreetView(props) {
	const handleRedirect = () => props.history.push("/streetView/gateFront");

	return (
		<div className="container">
			<div className="d-flex flex-column">
				<h1>Street View Tutorial</h1>
				<div>Content</div>
			</div>

			<button
				type="button"
				onClick={handleRedirect}
				className="btn btn-primary">
				Start
			</button>
		</div>
	);
}

export default StreetView;
