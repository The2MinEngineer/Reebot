import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import "./CustomScrollbar.css";

import { ReactComponent as Logo } from "../../assets/ReeBot.svg";
import { MdOutlineChevronLeft } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSolidNotification } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { GoChevronRight } from "react-icons/go";

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(null);
	const [open, setOpen] = useState(true);

	const handleMenuClick = (menuName) => {
		setActiveMenu((prevActiveMenu) =>
			prevActiveMenu === menuName ? null : menuName
		);
	};

	return (
		<div
			className={`h-screen bg-[#181818] p-5 pt-5 overflow-y-auto ${
				open ? "w-72" : "w-24"
			} duration-300 relative`}
			style={{ overflowX: "hidden" }}
		>
			<MdOutlineChevronLeft
				className={`absolute top-9 right-0 z-100 border shadow-md shadow-opacity-20 cursor-pointer bg-white text-3xl rounded-full text-[#181818] ${
					!open && "rotate-180"
				}`}
				onClick={() => setOpen(!open)}
			/>

			<div className="pb-16 px-2 inline-flex items-center">
				<Logo
					alt="ReeBot Logo"
					className={`duration-500 ${open ? "rotate-360" : "rotate-0"}`}
				/>
				<h1
					className={`text-white ml-2 text-2xl origin-left font-extrabold duration-300 ${
						!open && "scale-0"
					}`}
				>
					ReeBot
				</h1>
			</div>

			<div className="mb-32">
				<h2
					className={`mb-6 text-[14px] text-white duration-300 ${
						!open && "scale-0"
					}`}
				>
					MENU
				</h2>
				<NavbarMenu
					icon={<BiSolidDashboard />}
					text="Dashboard"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "dashboard"}
					onClick={() => handleMenuClick("dashboard")}
					open={open}
				/>
				<NavbarMenu
					icon={<MdSubscriptions />}
					text="Subscriptions"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "subscriptions"}
					onClick={() => handleMenuClick("subscriptions")}
					open={open}
				/>
				<NavbarMenu
					icon={<LuArrowUpDown />}
					text="Expenses"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "expenses"}
					onClick={() => handleMenuClick("expenses")}
					open={open}
				/>
				<NavbarMenu
					icon={<BiSolidNotification />}
					text="Messages"
					isActive={activeMenu === "messages"}
					onClick={() => handleMenuClick("messages")}
					open={open}
				/>
			</div>
			<div className="mb-32">
				<h2
					className={`mb-6 text-[14px] text-white duration-300 ${
						!open && "scale-0"
					}`}
				>
					ACCOUNT
				</h2>
				<NavbarMenu
					icon={<BsFillPersonFill />}
					text="Profile"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "Profile"}
					onClick={() => handleMenuClick("Profile")}
					open={open}
				/>
				<NavbarMenu
					icon={<MdContactSupport />}
					text="Help & Support"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "Help & Support"}
					onClick={() => handleMenuClick("Help & Support")}
					open={open}
				/>
			</div>
			<div className="">
				<NavbarMenu
					icon={<TbLogout2 />}
					text="Logout"
					secondIcon={<BsFillPersonFill />}
					isActive={activeMenu === "Logout"}
					onClick={() => handleMenuClick("Logout")}
					open={open}
				/>
			</div>
		</div>
	);
};

export default Navbar;
