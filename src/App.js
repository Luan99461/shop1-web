import React from "react";
import {
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import "./App.css";
import Navbar1 from "./components/Navbar1/index";
import Navbar2 from "./components/Navbar2/index";
import LognIn from "./components/Pages/Login/LognInElements/LognIn";
import FAQ from "./components/Pages/FAQ/FAQ";
import HTCH from "./components/Pages/HTCH/HTCH";
import SanPhamYeuThich from "./components/Pages/SanPhamYeuThich/SPYT";
import SignUp from "./components/Pages/Sign-up/PagesSignUp/SignUp";
// 
import GioiThieu from "./components/Pages/GioiThieu/GioiThieu";
import Home from "./components/Pages/Home/Home";
import LienHe from "./components/Pages/LienHe/LienHe";
import News from "./components/Pages/TinTuc.js/TinTuc";
import SanPham from "./components/Pages/SanPham/SanPham";
import Cart from "./components/Pages/Cart";
import Search from "./components/Pages/Search/Search";


// 

function App() {
	return (
		<Router>
			<Navbar1 />
			<Navbar2 />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/HTCH" element={<HTCH />} />
				<Route path="/FAQ" element={<FAQ />} />
				<Route path="/SanPhamYeuThich" element={<SanPhamYeuThich />} />
				<Route path="/logn-in" element={<LognIn />} />
				<Route path="/SanPham/cart" element={<Cart />} />
				<Route path="/SanPham/search" element={<Search />} />
			</Routes>
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/GioiThieu" element={<GioiThieu />} />
				<Route path="/SanPham" element={<SanPham />} />
				<Route path="/TinTuc" element={<News />} />
				<Route path="/LienHe" element={<LienHe />} />
			</Routes>
		</Router>

	);
}
export default App;






