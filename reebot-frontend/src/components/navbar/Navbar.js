import React from "react";
import { LuSearch } from "react-icons/lu";
import { BiNotification } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-5 bg-white">
			<div className="flex items-center bg-[#F3F4F3] rounded-md p-5 w-[300px] text-primary-dark text-opacity-30">
				{/* search */}
				<LuSearch className="mr-2 text-[18px]" />
				<input
					type="text "
					placeholder="Search..."
					className="text-xs outline-none bg-transparent border-none focus:outline-none"
				/>
			</div>

			<div className="flex">
				{/* messages */}
				<div className="flex items-center bg-[#F3F4F3] rounded-md p-5 text-primary-dark text-[18px]">
					<BiNotification />
				</div>

				{/* setting */}
				<div className="flex items-center bg-[#F3F4F3] rounded-md p-5 text-primary-dark text-[18px]">
					<IoMdSettings />
				</div>

				{/* profile */}
				<div className="flex items-center bg-[#F3F4F3] rounded-md p-1">
					<div className="flex items-center bg-primary-dark rounded-md p-2 text-white text-[18px] mr-3">
						<BsFillPersonFill />
					</div>
					<h2 className="text-primary-dark text-[14px] font-bold mr-3">
						Hello, Isaac
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
