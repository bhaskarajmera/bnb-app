import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const CarouselCard = ({img}) => {
	return (
		<Carousel 
			axis="horizontal"
			showStatus={false}
			className="relative"
			showThumbs={false}
			renderArrowPrev={(clickHandler, hasPrev) => {
				return (
					<div
						className={`${
							hasPrev ? 'absolute' : 'hidden'
						} top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
						onClick={clickHandler}
					>
						<i className="fas fa-chevron-circle-left fa-xl text-white"></i>
					</div>
				);
			}}

			renderArrowNext={(clickHandler, hasNext) => {
				return (
					<div
						className={`${
							hasNext ? 'absolute' : 'hidden'
						} top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
						onClick={clickHandler}
					>
						<i className="fas fa-chevron-circle-right fa-xl text-white"></i>
					</div>
				);
			}}	
		>
			{img.map((ig, index) => {
				return(
					<div key={index} className={`img${index} rounded-lg bg-cover h-full`}>
						<img className="rounded-xl bg-cover h-full" src={ig} />
					</div>
				)
			})}
		</Carousel>
	)
}

export default CarouselCard