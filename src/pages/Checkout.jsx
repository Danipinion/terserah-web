import MainLayouts from "../layouts/MainLayouts";
import { useCart } from "../context/CartContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
	const { cart, removeFromCart, addToCart, clearCart } = useCart();
	const [name, setName] = useState("");

	// Function to load cart data from local storage
	const loadCartData = () => {
		const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
		const updatedCart = storedCart.map((item) => ({
			...item,
			quantity: item.quantity || 1, // Set default quantity to 1 if not present
		}));
		addToCart(updatedCart);
	};
	const saveLocalData = () => {
		if (cart.length !== 0) {
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	};

	useEffect(() => {
		// Load cart data from local storage when the component mounts
		loadCartData();
	}, []);

	useEffect(() => {
		// Save cart data to local storage whenever cart changes
		saveLocalData();
	}, [cart]);

	const handleIncrement = (index) => {
		const updatedCart = [...cart];
		updatedCart[index].quantity += 1;
		addToCart(updatedCart);
		// Save cart data to local storage when quantity is updated
		localStorage.setItem("cart", JSON.stringify(updatedCart));
	};

	const handleDecrement = (index) => {
		const updatedCart = [...cart];
		if (updatedCart[index].quantity > 1) {
			updatedCart[index].quantity -= 1;
			addToCart(updatedCart);
			// Save cart data to local storage when quantity is updated
			localStorage.setItem("cart", JSON.stringify(updatedCart));
		} else {
			clearCart();
		}
	};

	// Filter out items without a price
	const filteredCart = cart.filter((item) => item.price !== undefined);

	const sendWhatsAppMessage = () => {
		const message = `
Terserah Brand:
${filteredCart.map((item) => `-${item.name} (${item.quantity})`).join("\n")}
atas nama: ${name}
    `;
		const whatsappLink = `https://wa.me/62895808475151?text=${encodeURIComponent(
			message
		)}`;
		setTimeout(() => {
			window.location.href = whatsappLink;
			// Clear the cart after sending the message
			filteredCart.forEach((_, index) => removeFromCart(index));
			clearCart();
			// Clear local storage
			localStorage.removeItem("cart");
		}, 2000);
	};

	const notify = () => {
		toast.success("Terima kasih sudah pesan di toko kami", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	return (
		<MainLayouts>
			<ToastContainer />
			<div className="flex flex-col items-center px-2">
				<h1 className="text-white text-[40px] not-italic font-bold leading-[normal] mb-6">
					Your Items
				</h1>
				<div className="sm:w-[552px] w-full  h-[435px] shrink-0 rounded-[10px] bg-white px-10 flex flex-col">
					<div>
						<h1 className="text-black sm:text-[40px] text-3xl not-italic font-bold leading-[normal] text-center pt-6 pb-4">
							Yang Dipesan
						</h1>
						<div className="sm:w-[469px] h-px mx-auto bg-gray-300  mb-2"></div>
					</div>
					<div className="h-1/2 overflow-hidden">
						<ul>
							{filteredCart.map((item, index) => (
								<li key={index} className="flex justify-between items-center">
									<p className="text-black sm:text-[40px] text-2xl not-italic font-bold leading-[normal]">
										{item.name}
									</p>
									<div className="flex items-center gap-2">
										<Link
											to={"/checkout"}
											onClick={() => handleDecrement(index)}
											className="bg-secondary w-10 h-10 flex items-center
                      justify-center text-white rounded-md"
										>
											<AiOutlineMinus size={30} />
										</Link>
										<p className="text-2xl">{item.quantity}</p>
										<Link
											to={"/checkout"}
											onClick={() => handleIncrement(index)}
											className="bg-secondary w-10 h-10 flex items-center justify-center text-white rounded-md"
										>
											<AiOutlinePlus />
										</Link>
										<button
											onClick={() => removeFromCart(index)}
											className="bg-red-500 w-10 h-10 flex items-center justify-center text-white rounded-md"
										>
											<BsFillTrashFill />
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div className="sm:w-[469px] h-px mx-auto bg-gray-300"></div>
						<div className="flex">
							<div className="w-[471px] text-black text-[32px] not-italic font-bold leading-[normal]">
								Price:
							</div>
							<div className="w-[471px] text-black text-right text-[32px] not-italic font-bold leading-[normal]">
								{" "}
								{new Intl.NumberFormat("id-ID", {
									style: "currency",
									currency: "IDR",
									minimumFractionDigits: 0,
									maximumFractionDigits: 0,
								}).format(
									filteredCart.reduce(
										(acc, item) => acc + item.price * item.quantity,
										0
									)
								)}
							</div>
						</div>
						<div>
							{filteredCart.length !== 0 ? (
								<button
									onClick={() =>
										document.getElementById("my_modal_1").showModal()
									}
									className={`text-white font-bold text-center bg-secondary w-full rounded-md h-9 text-xl mt-2`}
								>
									Pesan
								</button>
							) : (
								<button
									onClick={() =>
										document.getElementById("my_modal_1").showModal()
									}
									className={`text-white font-bold text-center bg-gray-500 w-full rounded-md h-9 text-xl mt-2`}
									disabled
								>
									Pesan
								</button>
							)}
						</div>
						<dialog id="my_modal_1" className="modal">
							<div className="modal-box">
								<h3 className="font-bold text-md">
									Masukkan Namamu, kelas, sekolah:
								</h3>
								<input
									type="text"
									placeholder="Cth: Joko (12 TKJ 1 Smkn 1 geger)"
									className="input w-full  mt-3"
									onChange={(e) => setName(e.target.value)}
								/>
								<div className="modal-action">
									<form method="dialog" className="flex">
										{/* if there is a button in form, it will close the modal */}
										{name !== "" ? (
											<div onClick={notify}>
												<button
													className="btn bg-secondary text-white mr-2"
													onClick={sendWhatsAppMessage}
												>
													Pesan Sekarang
												</button>
											</div>
										) : (
											<div>
												<button
													className="btn bg-gray-400  mr-2"
													onClick={sendWhatsAppMessage}
													disabled
												>
													Pesan Sekarang
												</button>
											</div>
										)}
										<button className="btn">Close</button>
									</form>
								</div>
							</div>
						</dialog>
					</div>
				</div>
			</div>
		</MainLayouts>
	);
};

export default Checkout;
