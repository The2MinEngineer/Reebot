import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="flex">
			<div>
				<Sidebar />
			</div>
			<div>
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
