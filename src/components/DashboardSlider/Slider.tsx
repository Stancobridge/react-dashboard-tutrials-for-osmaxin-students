import { Card } from "../Card";
import SliderBalance from "./SliderBalance";
import SliderNav from "./SliderNav";
import Slides from "./Slides";

export const Slider: React.FC = () => {
	return (
			<Card className="mt-6">
				<SliderNav />
				<div className="hidden__flow">
					<Slides />
				</div>
			</Card>
	);
};
