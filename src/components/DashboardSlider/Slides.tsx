import SliderBalance from "./SliderBalance";
import card from "../../../src/asset/card.png";

const Slides = () => {
	return (
		<div className="relative h-full transition-transform duration-[250ms] ease-in">
			<div className="absolute w-full top-0 bottom-0 current-slide ">
				<div className="mt-4 flex w-full">
					<div className=" w-[60%]">
						<img
							src={card}
							className="h-full w-full lg:w-[320px] object-cover"
							alt="first slide"
						/>
					</div>
					<SliderBalance />
				</div>
			</div>
		</div>
	);
};

export default Slides;
