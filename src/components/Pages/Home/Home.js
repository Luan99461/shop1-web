// pages/index.js

import React from 'react';
import Slidebar from '../ElementsHome/Carousel/Slidebar';
import Footer from '../ElementsHome/Footer/Footer';
import Information from '../ElementsHome/Information/information';
import ListBigItems from '../ElementsHome/ListBigItems/ListBigItems';
import RateWeb from '../ElementsHome/RateWeb/RateWeb';
import TinTucHome from '../ElementsHome/TinTucHome/TinTucHome';
import ProductList from '../SanPham/ProductList';


const Home = () => {
	return (
		<div
			style={{
				// display: 'flex',
				justifyContent: 'centre',
				alignItems: 'centre',
				height: '100vh',
			}}
		>
			<Slidebar />
			<ListBigItems />
			<Information />
			<ProductList/>
			<RateWeb />
			<TinTucHome />
			<Footer />
		</div>
	);
};

export default Home;
