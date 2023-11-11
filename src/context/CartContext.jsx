// CartContext.js
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((prevCart) => {
			const existingItemIndex = prevCart.findIndex((i) => i.name === item.name);

			if (existingItemIndex !== -1) {
				const updatedCart = [...prevCart];
				updatedCart[existingItemIndex].quantity += 1;
				return updatedCart;
			} else if (item.price !== undefined) {
				return [...prevCart, { ...item, quantity: 1 }];
			} else {
				return prevCart;
			}
		});
	};

	const removeFromCart = (index) => {
		setCart((prevCart) => {
			const updatedCart = [...prevCart];
			updatedCart.splice(index, 1);
			clearCart();
			return updatedCart;
		});
	};

	// Load cart data from local storage when the component mounts
	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
		setCart(storedCart);
	}, []);

	// Save cart data to local storage whenever cart changes
	useEffect(() => {
		if (cart.length !== 0) {
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, [cart]);

	const loadCartData = () => {
		const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
		setCart(storedCart);
	};

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem("cart");
	};

	useEffect(() => {
		loadCartData();
	}, []);

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};
