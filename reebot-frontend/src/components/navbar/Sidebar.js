import React, { useContext, createContext, useState } from "react";
import { MoreVertical } from "lucide-react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import reebotLogo from '../../assets/ReeBot.svg'

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
	const [expanded, setExpanded] = useState(true);

	return (
		<aside className="h-screen">
			<nav className="h-full flex flex-col bg-[#181818] border-r shadow-sm">
				<div className="p-4 pb-2 flex justify-between items-center mb-16">
					<img
						src={reebotLogo}
						className={`overflow-hidden transition-all ${
							expanded ? "w-32" : "w-0"
						}`}
						alt=""
					/>
					<button
						onClick={() => setExpanded((curr) => !curr)}
						className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
					>
						{expanded ? <MdOutlineChevronLeft /> : <MdOutlineChevronRight />}
					</button>
				</div>

				<SidebarContext.Provider value={{ expanded }}>
					<ul className="flex-1 px-3">{children}</ul>
				</SidebarContext.Provider>

				<div className="border-t flex p-3">
					<img
						src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
						alt=""
						className="w-10 h-10 rounded-md"
					/>
					<div
						className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
					>
						<div className="leading-4">
							<h4 className="font-semibold text-white">John Doe</h4>
							<span className="text-xs text-white">johndoe@gmail.com</span>
						</div>
						<MoreVertical
							size={20}
							className="text-white"
						/>
					</div>
				</div>
			</nav>
		</aside>
	);
};

const SidebarItem = ({ icon, text, active, alert }) => {
	const { expanded } = useContext(SidebarContext);

	return (
		<li
			className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-[#287DF9] text-white" : "hover:bg-[#287DF9] text-white"}
    `}
		>
			{icon}
			<span
				className={`overflow-hidden transition-all ${
					expanded ? "w-52 ml-3" : "w-0"
				}`}
			>
				{text}
			</span>
			{alert && (
				<div
					className={`absolute right-2 w-2 h-2 rounded bg-white ${
						expanded ? "" : "top-2"
					}`}
				/>
			)}

			{!expanded && (
				<div
					className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-[#287DF9] text-white text-sm invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
				>
					{text}
				</div>
			)}
		</li>
	);
};

export { Sidebar, SidebarItem };
