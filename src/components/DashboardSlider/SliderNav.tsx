import { ReactNode } from "react";
type Prop = {
	children: ReactNode;
};

const SliderNav = ({ children }: Prop) => {
	return (
		<div className="flex justify-between">
			<div className="flex items-center space-x-2">
				<h4 className="text-black font-bold text-lg">wallet</h4>
				<span className="text-sm text-gray-400  "> Card | 1 out of 4</span>
			</div>

			{children}
		</div>
	);
};

export default SliderNav;
