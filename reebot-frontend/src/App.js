import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="flex">
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
	);
}

export default App;
