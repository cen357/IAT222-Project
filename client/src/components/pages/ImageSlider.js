import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Anthony from "../../assets/img/anthony.png";
import Angela from "../../assets/img/angela.png";
import Gurmastak from "../../assets/img/gurmastak.png";
import Kayla from "../../assets/img/kayla.png";
import Mark from "../../assets/img/mark.png";
import Mitch from "../../assets/img/mitch.png";
import Safwat from "../../assets/img/Safwat.png";
import Sofia from "../../assets/img/sofia.png";
import Trisha from "../../assets/img/trisha.png";
import Xingchencao from "../../assets/img/xingchencao.png";

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
				<img src={Anthony} alt="anthony" height="300" width="300" />
			</div>
			<div>
				<img src={Angela} alt="angela" height="300" width="300" />
			</div>
			<div>
				<img src={Gurmastak} alt="gurmastak" height="300" width="300" />
			</div>
			<div>
				<img src={Kayla} alt="kayla" height="300" width="300" />
			</div>
			<div>
				<img src={Mark} alt="mark" height="300" width="300" />
			</div>
			<div>
				<img src={Mitch} alt="mitch" height="300" width="300" />
			</div>
			<div>
				<img src={Safwat} alt="safwat" height="300" width="300" />
			</div>
			<div>
				<img src={Sofia} alt="sofia" height="300" width="300" />
			</div>
			<div>
				<img src={Trisha} alt="trisha" height="300" width="300" />
			</div>
			<div>
				<img
					src={Xingchencao}
					alt="xingchencao"
					height="300"
					width="300"
				/>
			</div>
		</Carousel>
	);
}

export default ImageSlider;
