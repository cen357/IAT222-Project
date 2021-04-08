import React from "react";
import Cat from "../../assets/pages/cat.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

function ImageSlider() {
	return (
		<Carousel
			responsive={responsive}
			showDots={true}
			slidesToSlide={1}
			infinite={true}
			autoPlay={false}
			itemClass="image-item"
			containerClass="carousel-container"
			keyBoardControl={true}>
			<div>
				<img src={Cat} alt="cat" height="300" width="300" />
			</div>
			<div>
				<img src={Cat} alt="cat" height="300" width="300" />
			</div>
			<div>
				<img src={Cat} alt="cat" height="300" width="300" />
			</div>
			<div>
				<img src={Cat} alt="cat" height="300" width="300" />
			</div>
			<div>
				<img src={Cat} alt="cat" height="300" width="300" />
			</div>
			<div>
				<img src={Cat} alt="cat" height="300" width="300" />
			</div>
		</Carousel>
	);
}

export default ImageSlider;
