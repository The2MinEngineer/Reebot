// Menu.js
import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ title, menuItems }) => {
	return (
		<div className="mb-10">
			<h1 className="text-white mb-2">{title ? title : null}</h1>
			<div>
				{menuItems.map((item, index) => (
					<MenuItem
						key={index}
						menuIcon={item.menuIcon}
						menuText={item.menuText}
						subIcon={item.subIcon}
                        menuNumber={ Number }
					/>
				))}
			</div>
		</div>
	);
};

export default Menu;
