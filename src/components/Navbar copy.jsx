import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logo } from "../assets/img";
import { useCart } from "../context/CartContext";
const Navbar = () => {
	const { cart } = useCart();
	return (
		<nav className="flex justify-between items-center text-white px-5 font-medium font-poppins">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div>
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
							<BsFillCartFill size={25} />
							<span className="cart-count">{cart.length}</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
