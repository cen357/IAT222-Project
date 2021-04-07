import React from "react";
import Cat from "../../assets/pages/cat.jpg";

function Home(props) {
	function handleStart() {
		props.history.push("/streetView");
	}

	return (
		<div className="container">
			<div className="d-flex flex-row mt-5">
				<div className="p-5">
					<img src={Cat} alt="cat" height="400" width="400" />
				</div>
				<div className="p-3"></div>
				<div className="p-5">
					<h1>Virtual reality walk in Chinatown</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Fugit placeat est laboriosam minus saepe quis rerum
						maiores odit? Corrupti dolores eos similique quo quidem
						earum vitae molestiae at nihil quod!
					</p>
					<div className="btn-group">
						<button
							type="button"
							onClick={handleStart}
							className="btn btn-secondary">
							Click to Start
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
