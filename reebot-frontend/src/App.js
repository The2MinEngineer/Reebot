import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { TbLogout2 } from "react-icons/tb";
import { BiSolidDashboard } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { TbHelpCircleFilled } from "react-icons/tb";
import { BsPersonFill } from "react-icons/bs";
import { PiNotificationFill } from "react-icons/pi";
import { LuArrowUpDown } from "react-icons/lu";
import { Sidebar, SidebarItem } from "./components/navbar/Sidebar";

function App() {
	return (
		<div className="flex">
			<Sidebar>
				<SidebarItem
					icon={<BiSolidDashboard size={20} />}
					text="Dashboard"
					alert
				/>
				<SidebarItem
					icon={<MdSubscriptions size={20} />}
					text="Subscriptions"
				/>
				<SidebarItem
					icon={<LuArrowUpDown size={20} />}
					text="Expenses"
				/>
				<SidebarItem
					icon={<PiNotificationFill size={20} />}
					text="Messages"
				/>
				<SidebarItem
					icon={<BsPersonFill size={20} />}
					text="Profile"
				/>
				<SidebarItem
					icon={<TbHelpCircleFilled size={20} />}
					text="Help & Support"
				/>
				<SidebarItem
					icon={<TbLogout2 size={20} />}
					text="Logout"
				/>
			</Sidebar>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
		</div>
	);
}

export default App;
