import React from "react";
import Dashboard from "../components/Dashboard";

const Home = () => {
	return (
    <div className="m-5">
      {/* top */}
      <div>
        <Dashboard />
      </div>
			<div>Subscriptions</div>
		</div>
	);
};

export default Home;
