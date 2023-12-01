import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import "./CustomScrollbar.css";

import { ReactComponent as Logo } from "../assets/ReeBot.svg";
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

	const handleMenuClick = (menuName) => {
		setActiveMenu((prevActiveMenu) =>
			prevActiveMenu === menuName ? null : menuName
		);
	};

	return (
		<div className="w-1/5 h-screen bg-[#181818] p-5 overflow-y-auto">
			<div className="pb-16 px-2">
				<Logo alt="ReeBot Logo" />
			</div>
			<div className="mb-32">
				<h2 className="mb-6 text-[14px] text-white">MENU</h2>
				<NavbarMenu
					icon={<BiSolidDashboard />}
					text="Dashboard"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "dashboard"}
					onClick={() => handleMenuClick("dashboard")}
				/>
				<NavbarMenu
					icon={<MdSubscriptions />}
					text="Subscriptions"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "subscriptions"}
					onClick={() => handleMenuClick("subscriptions")}
				/>
				<NavbarMenu
					icon={<LuArrowUpDown />}
					text="Expenses"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "expenses"}
					onClick={() => handleMenuClick("expenses")}
				/>
				<NavbarMenu
					icon={<BiSolidNotification />}
					text="Messages"
					isActive={activeMenu === "messages"}
					onClick={() => handleMenuClick("messages")}
				/>
			</div>
			<div className="mb-32">
				<h2 className="mb-6 text-[14px] text-white">ACCOUNT</h2>
				<NavbarMenu
					icon={<BsFillPersonFill />}
					text="Profile"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "Profile"}
					onClick={() => handleMenuClick("Profile")}
				/>
				<NavbarMenu
					icon={<MdContactSupport />}
					text="Help & Support"
					secondIcon={<GoChevronRight />}
					isActive={activeMenu === "Help & Support"}
					onClick={() => handleMenuClick("Help & Support")}
				/>
			</div>
			<div>
				<NavbarMenu
					icon={<TbLogout2 />}
					text="Logout"
					secondIcon={<BsFillPersonFill />}
					isActive={activeMenu === "Logout"}
					onClick={() => handleMenuClick("Logout")}
				/>
			</div>
		</div>
	);
};

export default Navbar;
