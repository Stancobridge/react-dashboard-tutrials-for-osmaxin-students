import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useHook } from "../Hooks/useHook";

const SliderNav = () => {
	const { handleNextSlide, handlePrevSlide } = useHook();
	const btnStyle =
		"shadow-btn bg-none border-none p-2 rounded text-gray-500 w-9 text-[18px]font-bold";
	return (
		// textgray;
		<div className="flex justify-between">
			<div className="flex items-center space-x-2">
				<h4 className="text-black font-bold text-lg">wallet</h4>
				<span className="text-sm text-gray-400  "> Card | 1 out of 4</span>
			</div>

			<div className="nav__btn">
				<button className={btnStyle} onClick={handlePrevSlide}>
					<FaLessThan />
				</button>
				<button className={`${btnStyle} ml-3`} onClick={handleNextSlide}>
					<FaGreaterThan />
				</button>
			</div>
		</div>
	);
};

export default SliderNav;
