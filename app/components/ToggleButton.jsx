import React from "react";

const ToggleButton = ({ value, onChange }) => {
	return (
		<div className="form-control">
			<label className="cursor-pointer label">
				<input
					type="checkbox"
					className="toggle toggle-primary bg-{#287DF9}"
					// checked
				/>
			</label>
		</div>
	);
};

export default ToggleButton;
