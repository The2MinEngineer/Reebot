import React from "react";

const MenuItem = ({ menuIcon, menuText, subIcon, menuNumber }) => {
	return (
		<div className="flex items-center mb-1 justify-between p-4 rounded-md cursor-pointer text-white text-opacity-70 transition duration-300 hover:text-opacity-100 hover:bg-primary-blue">
			<div className="flex items-center justify-between">
				<div className="text-xl mr-5">{menuIcon}</div>
				<div className="text-[14px]">{menuText}</div>
			</div>
			<div>{menuNumber ? subIcon : menuNumber}</div>
		</div>
	);
};

export default MenuItem;
