// Navbar.js (updated)
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logo } from "../assets/img";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Menu",
		href: "/menu",
	},
	{
		title: "About Us",
		href: "/about",
	},
	{
		title: "Reviews",
		href: "/reviews",
	},
	{
		title: "Checkout",
		href: "/checkout",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const setToggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const containerVars = {
		initial: {
			transition: {
				staggerChildren: 0.09,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.09,
				staggerDirection: 1,
			},
		},
	};

	const { cart } = useCart();

	// Filter out items without a price
	const filteredCart = cart.filter((item) => item.price !== undefined);

	return (
		<nav className="flex justify-between items-center text-white px-5 font-medium font-poppins">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div className="sm:block hidden">
				<ul className="flex gap-5">
					<li>
						<Link to={"/"}>HOME</Link>
					</li>
					<li>
						<Link to={"/menu"}>MENU</Link>
					</li>
					<li>
						<Link to={"/about"}>ABOUT US</Link>
					</li>
					<li>
						<Link to={"/reviews"}>REVIEWS</Link>
					</li>
					<li>
						<Link to={"/checkout"}>
							<div className="indicator">
								<span className="indicator-item badge badge-info">
									{filteredCart.length}
								</span>
								<BsFillCartFill size={25} />
							</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className="sm:hidden block" onClick={setToggleMenu}>
				Menu
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						variants={menuVars}
						initial="initial"
						animate="animate"
						exit="exit"
						className="sm:hidden fixed left-0 top-0 w-full h-screen origin-top bg-secondary text-black p-8 z-10"
					>
						<div className="flex justify-between items-center">
							<img src={logo} alt="logo" />
							<p
								className="cursor-pointer text-md text-black"
								onClick={setToggleMenu}
							>
								Close
							</p>
						</div>
						<motion.div
							variants={containerVars}
							initial="initial"
							animate="open"
							className="flex flex-col h-full justify-center font-poppins text-center gap-4"
						>
							{navLinks.map((link, index) => {
								return (
									<div key={index} className="overflow-hidden">
										<MobileNavLink title={link.title} href={link.href} />
									</div>
								);
							})}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;

const mobileLinkVars = {
	initial: {
		y: "30vh",
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
	open: {
		y: 0,
		transition: {
			ease: [0, 0.55, 0.45, 1],
			duration: 0.7,
		},
	},
};

const MobileNavLink = ({ title, href }) => {
	return (
		<motion.div
			variants={mobileLinkVars}
			initial="initial"
			animate="open"
			className="text-4xl uppercase text-black"
		>
			<Link to={href}>{title}</Link>
		</motion.div>
	);
};
