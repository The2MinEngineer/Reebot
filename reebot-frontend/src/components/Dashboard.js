import React from "react";
import { ReactComponent as Reebot } from "../assets/Icon.svg";
import { ReactComponent as Naira } from "../assets/Naira.svg";

const Dashboard = () => {
	return (
		<div className="flex text-primary-dark space-x-5">
			<div className="bg-white rounded-[20px] p-5 w-1/4">
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

			<div className="w-2/4">
				<div className="bg-white rounded-[20px] p-10">
					<div className="flex justify-between items-center mb-10">
						<p className="text-[18px] font-bold text-[#181818]">EXPENSES</p>
						<div className="flex items-center">
							<p className="text-[18px] font-semibold text-[#181818] text-opacity-70">
								Activate All:
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-[10px]">
						<Naira />
						<p className="text-[64px] font-extrabold text-[#181818]">
							0<span className="text-[48px]">.</span>
							<span className="text-[48px]">00</span>
						</p>
					</div>
					<div className="mt-[40px]">
						<p className="text-[18px] font-semibold text-[#181818]">
							Active Subscriptions: 0 of 0
						</p>
					</div>
				</div>

				<div>Hello</div>
			</div>

			<div className="bg-white rounded-[20px] p-5 w-1/4">
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
