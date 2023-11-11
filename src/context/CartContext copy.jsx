// /* eslint-disable react/prop-types */
// // CartContext.js
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
// 	const [cart, setCart] = useState([]);

// 	const addToCart = (item) => {
// 		setCart([...cart, item]);
// 	};

// 	const removeFromCart = (index) => {
// 		const newCart = [...cart];
// 		newCart.splice(index, 1);
// 		setCart(newCart);
// 	};

// 	return (
// 		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
// 			{children}
// 		</CartContext.Provider>
// 	);
// };

// export const useCart = () => {
// 	return useContext(CartContext);
// };

// // ####################
// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// // CartContext.js
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
// 	const [cart, setCart] = useState([]);

// 	const addToCart = (item) => {
// 		const existingItemIndex = cart.findIndex((i) => i.name === item.name);

// 		if (existingItemIndex !== -1) {
// 			const updatedCart = [...cart];
// 			updatedCart[existingItemIndex].quantity += 1;
// 			setCart(updatedCart);
// 		} else {
// 			setCart([...cart, { ...item, quantity: 1 }]);
// 		}
// 	};

// 	const removeFromCart = (index) => {
// 		const newCart = [...cart];
// 		newCart.splice(index, 1);
// 		setCart(newCart);
// 	};

// 	return (
// 		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
// 			{children}
// 		</CartContext.Provider>
// 	);
// };

// export const useCart = () => {
// 	return useContext(CartContext);
// };

// #######

// Update your CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((prevCart) => {
			const existingItemIndex = prevCart.findIndex((i) => i.name === item.name);

			if (existingItemIndex !== -1) {
				// If the item already exists in the cart, update the quantity
				const updatedCart = [...prevCart];
				updatedCart[existingItemIndex].quantity += 1;
				return updatedCart;
			} else if (item.price !== undefined) {
				// If the item doesn't exist and has a price, add it to the cart
				return [...prevCart, { ...item, quantity: 1 }];
			} else {
				// If the item doesn't have a price, do not add it to the cart
				return prevCart;
			}
		});
	};

	const removeFromCart = (index) => {
		setCart((prevCart) => {
			// Create a shallow copy of the cart and remove the item
			const updatedCart = [...prevCart];
			updatedCart.splice(index, 1);
			return updatedCart;
		});
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};

// ######
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

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};
