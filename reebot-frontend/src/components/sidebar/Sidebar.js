// Sidebar.js
import React from "react";
import { ReactComponent as Reebot } from "../../assets/ReeBot.svg";
import Menu from "../Menu";

import {
	BiSolidDashboard,
	BiNotification,
	BiSolidHelpCircle,
} from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { LuChevronRight, LuArrowUpDown, LuLogOut } from "react-icons/lu";

const Sidebar = () => {
	const menuItems1 = [
		{
			menuIcon: <BiSolidDashboard />,
			menuText: "Dashboard",
			subIcon: <LuChevronRight />,
		},
		{
			menuIcon: <MdSubscriptions />,
			menuText: "Subscription",
			subIcon: <LuChevronRight />,
		},
		{
			menuIcon: <LuArrowUpDown />,
			menuText: "Expenses",
			subIcon: <LuChevronRight />,
		},
		{
			menuIcon: <BiNotification />,
			menuText: "Messages",
		},
	];

	const menuItems2 = [
		{
			menuIcon: <BsFillPersonFill />,
			menuText: "Profile",
			subIcon: <LuChevronRight />,
		},
		{
			menuIcon: <BiSolidHelpCircle />,
			menuText: "Subscription",
		},
	];

	const menuItems3 = [
		{
			menuIcon: <LuLogOut />,
			menuText: "Logout",
		},
	];

	return (
		<div className="w-[280px] bg-primary-dark h-screen px-5 py-8">
			{/* logo */}
			<div className="mb-12">
				<Reebot alt="ReeBot Logo" />
			</div>

			<div>
				{/* Menu */}
				<Menu
					title="MENU"
					menuItems={menuItems1}
				/>

				{/* Account */}
				<Menu
					title="ACCOUNT"
					menuItems={menuItems2}
				/>

				{/* logout */}
				<Menu menuItems={menuItems3} />
			</div>
		</div>
	);
};

export default Sidebar;
