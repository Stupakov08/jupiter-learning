import React, { Component } from 'react';
import BasketSummary from '../components/BasketSummary';
import ProductList from '../components/ProductList';
import products from '../data/products';

const INITIAL_STATE = {
	products: [],
	cart: {
		products: [],
		totalAmount: 0,
		totalPrice: 0
	}
};

export class Basket extends Component {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;

		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
	}
	componentDidMount() {
		this.setState({ products });
	}
	addToCart(product) {
		this.setState(state => {
			const exist = state.cart.products.filter(p => p.id === product.id);
			if (exist.length) return state;

			const products = [...state.cart.products, product];
			const totalAmount = state.cart.totalAmount + 1;
			const totalPrice = state.cart.totalPrice + product.price;
			return { cart: { products, totalAmount, totalPrice } };
		});
	}
	removeFromCart(product) {
		this.setState(state => {
			const products = state.cart.products.filter(p =>
				p.id === product.id ? false : true
			);
			const totalAmount = state.cart.totalAmount - 1;
			const totalPrice = state.cart.totalPrice - product.price;
			return { cart: { products, totalAmount, totalPrice } };
		});
	}
	render() {
		return (
			<div>
				<BasketSummary
					products={this.state.cart.products}
					totalAmount={this.state.cart.totalAmount}
					totalPrice={this.state.cart.totalPrice}
					removeFromCart={this.removeFromCart}
				></BasketSummary>
				<ProductList
					products={this.state.products}
					addToCart={this.addToCart}
				></ProductList>
			</div>
		);
	}
}

export default Basket;
