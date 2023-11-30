import React from "react";

const NavbarMenu = ({ icon, text, number, secondIcon, isActive, onClick }) => {
	return (
		<div
			className={`flex justify-between items-center mb-2 p-4 text-white text-opacity-70 rounded-md hover:text-opacity-100 hover:bg-[#287DF9] ${
				isActive ? "bg-[#287DF9] text-opacity-100" : ""
			} transition duration-300 ease-in-out cursor-pointer`}
			onClick={onClick}
		>
			<div className="flex items-center">
				<span className="text-xl mr-5">{icon}</span>
				<p className="text-14px">{text}</p>
			</div>
			<div
				className={`opacity-0 group-hover:opacity-100 ${
					isActive ? "opacity-100" : ""
				}`}
			>
				{secondIcon ? <div>{secondIcon}</div> : <div>{number}</div>}
			</div>
		</div>
	);
};

export default NavbarMenu;
