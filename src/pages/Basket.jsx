import React, { useState, useEffect } from 'react';
import BasketSummary from '../components/BasketSummary';
import ProductList from '../components/ProductList';
import productsList from '../data/products';

const Basket = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({
		products: [],
		totalQuantity: 0,
		totalPrice: 0
	});

	useEffect(() => {
		setProducts([...productsList]);
	}, []);

	const addToCart = product => {
		let cartProducts = cart.products;
		const index = cartProducts.findIndex(p => p.id === product.id);

		if (index >= 0) {
			cartProducts[index].quantity++;
		} else {
			cartProducts = [...cartProducts, { ...product, quantity: 1 }];
		}

		const totalQuantity = ++cart.totalQuantity;
		const totalPrice = cart.totalPrice + product.price;

		setCart({ products: cartProducts, totalQuantity, totalPrice });
	};
	const removeFromCart = product => {
		let cartProducts = cart.products;
		const index = cartProducts.findIndex(
			p => p.id === product.id && p.quantity > 1
		);
		if (index >= 0) {
			cartProducts[index].quantity--;
		} else {
			cartProducts = cartProducts.filter(p => p.id !== product.id);
		}

		const totalQuantity = --cart.totalQuantity;
		const totalPrice = cart.totalPrice - product.price;

		setCart({ products: cartProducts, totalQuantity, totalPrice });
	};

	return (
		<div>
			<BasketSummary
				products={cart.products}
				totalQuantity={cart.totalQuantity}
				totalPrice={cart.totalPrice}
				removeFromCart={removeFromCart}
			></BasketSummary>
			<ProductList products={products} addToCart={addToCart}></ProductList>
		</div>
	);
};
export default Basket;
