import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Update this path

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<CartProvider>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	</React.StrictMode>
);
