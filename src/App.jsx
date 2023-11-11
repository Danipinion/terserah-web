import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Checkout from "./pages/Checkout";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/about" element={<About />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="*" element={<div>Error</div>} />
			</Routes>
		</AnimatePresence>
	);
};

export default App;
