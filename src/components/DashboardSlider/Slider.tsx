import { Card } from "../Card";
import SliderNav from "./SliderNav";
import Slides from "./Slides";
import { FaGreaterThan } from "react-icons/fa";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const Slider: React.FC = () => {
	const btnStyle =
		"shadow-btn bg-none border-none p-2 rounded text-gray-500 w-9 text-[18px]font-bold disabled:text-gray-300 disabled:bg-transparent";
	return (
		<Card className="mt-6 relative	">
			<Splide
				hasTrack={false}
				options={{ pagination: false }}
				aria-label="Card Slider"
				className="flex flex-col-reverse">
				<SplideTrack className=" h-[220px]">
					<SplideSlide>
						<Slides />
					</SplideSlide>
					<SplideSlide>
						<Slides />
					</SplideSlide>
				</SplideTrack>

				<SliderNav>
					<div className="splide__arrows">
						<button className={`splide__arrow--prev ${btnStyle}`}>
							<FaGreaterThan />
						</button>
						<button className={`splide__arrow--next  ml-2 ${btnStyle}`}>
							<FaGreaterThan />
						</button>
					</div>
				</SliderNav>
			</Splide>
		</Card>
	);
};
