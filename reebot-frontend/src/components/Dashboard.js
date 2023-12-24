import React from "react";
import { ReactComponent as Reebot } from "../assets/Icon.svg";

const Dashboard = () => {
	return (
		<div className="flex text-primary-dark space-x-5">
			<div className="bg-white rounded-[20px] p-5 w-1/3">
				<div className="mt-5">
					<Reebot />
					<h1 className="text-primary-dark text-2xl font-bold mt-[10px]">
						ReeBot
					</h1>
				</div>
				<p className="mt-5">
					Maximize, track and manage all your subscriptions across several
					platforms with us.
				</p>
				<p className="mt-5">
					With ReeBot, you will get updates on active subscriptions, renewals
					and even track your expenses.
				</p>
			</div>

			<div className="w-2/3">
                <div className="bg-white rounded-[20px] p-5">
                    <p>hello</p>
                </div>
			</div>

			<div className="bg-white rounded-[20px] p-5 w-1/3">
				<h2 className="text-lg font-bold mt-8">Welcome, Isaac</h2>
				<p className="mt-5">
					You can now proceed to add subscriptions to your account dashboard by
					navigating to the subscriptions menu.
				</p>
				<p className="mt-5">
					You can add subscriptions from music and movie streaming platforms
					like Spotify and Netflix, as well as from learning platforms like
					Coursera and Udemy.
				</p>
				<div className="text-primary-blue mt-6 flex justify-end">
					<p>Get Started</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
