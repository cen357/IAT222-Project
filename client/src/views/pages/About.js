import React from "react";
import "react-multi-carousel/lib/styles.css";
import ImageSlider from "../../components/pages/ImageSlider";
import Cat from "../../assets/img/cat.jpg";

function About() {
	return (
		<div className="container">
			<div className="d-flex justify-content-between pt-5">
				<div className="px-5 ml-5">
					<h1>Our goal</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Possimus a consectetur quae. Beatae molestiae
						deserunt, ducimus quod mollitia officiis. At modi illum
						quia facilis, omnis error hic perspiciatis voluptatem
						pariatur.
					</p>
				</div>
				<div className="px-5"></div>
				<div className="px-5 mr-5">
					<img src={Cat} alt="cat" height="300" width="300" />
				</div>
			</div>

			<div className="d-flex flex-column ml-5 px-5">
				<h1>Our team</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consectetur harum inventore facilis sunt autem est sapiente
					beatae voluptatum unde et. Dolore laudantium exercitationem
					eveniet suscipit aliquid nihil esse quia. Animi.
				</p>
				<ImageSlider />
			</div>
		</div>
	);
}

export default About;
