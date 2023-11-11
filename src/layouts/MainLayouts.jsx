import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const MainLayouts = ({ children }) => {
	return (
		<div className="bg-gradient-to-t from-primary from-5% to-secondary to-50% w-screen h-screen overflow-hidden">
			<motion.div
				className="slide-in absolute top-0 left-0 w-full h-screen bg-white origin-bottom z-10"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			></motion.div>
			<Navbar />
			{children}
			<motion.div
				className="slide-out absolute top-0 left-0 w-full h-screen bg-white origin-top z-10"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			></motion.div>
		</div>
	);
};

export default MainLayouts;
