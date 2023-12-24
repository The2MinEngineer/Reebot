import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="flex bg-background-color">
			<div>
				<Sidebar />
			</div>
			<div className="w-full">
				<div>
					<Navbar />
				</div>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
			</div>
		</div>
	);
}

export default App;
