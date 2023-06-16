import { useHook } from "../Hooks/useHook";
import SliderBalance from "./SliderBalance";
import card from "../../assets/image/card.png";

const Slides = () => {
	const { trackRef } = useHook();
	return (
		<div
			className="relative height-full transition-transform duration-[250ms] ease-in"
			ref={trackRef}>
			<div className="carousel current-slide">
				<div className="mt-4 flex width-full">
					<div
						className=" w-[60%]">
						<img src={card} className="w-full h-full object-fill" alt="first slide" />
					</div>
					<SliderBalance />
				</div>
			</div>

			{/* Add other carousel slides here */}
		</div>
	);
};

export default Slides;
