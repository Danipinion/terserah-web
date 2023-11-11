import { lesque, nasasu } from "../assets/img";
import { useCart } from "../context/CartContext";
import MainLayouts from "../layouts/MainLayouts";

const Menu = () => {
	// Step 1: State for Cart
	const { addToCart } = useCart();

	// Step 2: Add to Cart Function
	// const addToCart = (itemName, itemPrice) => {
	// 	const newItem = {
	// 		name: itemName,
	// 		price: itemPrice,
	// 	};

	// 	setCart([...cart, newItem]);
	// };

	return (
		<MainLayouts>
			<div className="flex flex-col items-center  h-screen overflow-y-auto ">
				<h1 className="text-white text-[40px] not-italic font-bold leading-[normal]">
					My Menu:
				</h1>
				<div className="flex gap-12 mt-6 sm:flex-row flex-col sm:pb-0 pb-40">
					{/* Menu Item 1 */}
					<div className="w-[282px]  rounded-[10px] bg-white overflow-hidden">
						<div className="group relative">
							<img src={lesque} alt="menu" />
							<div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-all group-hover:bg-white/50 w-full h-full text-center flex flex-col gap-5">
								<h1 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Lesque
								</h1>
								<p className="text-black text-xl not-italic font-medium leading-[normal]">
									Minuman lemon Bersoda yang menyegarkan
								</p>
								<h2 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Rp. 5000
								</h2>
								{/* Add to Cart Button */}
								<button
									onClick={() => addToCart({ name: "Lesque", price: 5000 })}
									className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					{/* Menu Item 2 */}
					<div className="w-[282px] rounded-[10px] bg-white overflow-hidden">
						<div className="group relative">
							<img src={nasasu} alt="menu" />
							<div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-all group-hover:bg-white/50 w-full h-full text-center flex flex-col gap-5">
								<h1 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Nasasu
								</h1>
								<p className="text-black text-xl not-italic font-medium leading-[normal]">
									Makanan nasi yang dicampuri ayam suwir pedas
								</p>
								<h2 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Rp. 6000
								</h2>
								{/* Add to Cart Button */}
								<button
									onClick={() => addToCart({ name: "Nasasu", price: 6000 })}
									className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<div className="w-[282px] rounded-[10px] bg-white overflow-hidden">
						<div className="group relative">
							<img src={nasasu} alt="menu" />
							<div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-all group-hover:bg-white/50 w-full h-full text-center flex flex-col gap-5">
								<h1 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Paket Komplit
								</h1>
								<p className="text-black text-xl not-italic font-medium leading-[normal]">
									Gabungan Nasasu Dan Lesque
								</p>
								<h2 className="text-black text-[40px] not-italic font-bold leading-[normal]">
									Rp. 10.000
								</h2>
								{/* Add to Cart Button */}
								<button
									onClick={() => addToCart({ name: "Komplit", price: 10000 })}
									className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayouts>
	);
};

export default Menu;
