import React from "react";

const SliderBalance = () => {
	const headerStyle = "text-sm text-gray-500";
	const moneyStyle = "text-2xl  font-bold";
	return (
		<div className="border-l ml-6 pl-3">
			<div className=" ">
				<h2 className={headerStyle}>Balance</h2>
				<h3 className={moneyStyle}>$14,528,00</h3>
			</div>
			<div className="mt-1">
				<h2 className={headerStyle}>Currency</h2>
				<h3 className={moneyStyle}>US Dollar</h3>
			</div>

			<div className="mt-3">
				<h4 className={headerStyle}>Deactivate card</h4>

				<label className="toggle-switch">
					<input type="checkbox" />
					<div className="toggle-switch-background">
						<div className="toggle-switch-handle"></div>
					</div>
				</label>
			</div>
		</div>
	);
};

export default SliderBalance;
