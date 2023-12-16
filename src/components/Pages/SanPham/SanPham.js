// pages/signup.js
import ProductList from './ProductList';
import React from "react";
import HeaderSanPham from "./HeaderSanPham";
import Footer from '../ElementsHome/Footer/Footer';
// import App from "./SignInElements/App.js";
const SanPham = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
				flexDirection: 'column'
			}}
		>
			<HeaderSanPham/>
			<ProductList/>
		

		</div>
	);
};

export default SanPham;
