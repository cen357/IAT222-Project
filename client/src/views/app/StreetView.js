import React from "react";

function streetView(props) {
	const handleStart = () =>
		props.history.push("/streetView/locations/blue/normal");

	return (
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
		</div>
	);
}

export default streetView;
