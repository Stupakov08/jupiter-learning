import React from 'react';
import Button from './primitives/Button';

const BasketSummary = ({
	products,
	totalQuantity,
	totalPrice,
	removeFromCart
}) => {
	return products.length === 0 ? null : (
		<div>
			{products.map(item => (
				<div key={item.id}>
					<span>{item.title}</span>
					<span> | x {item.quantity}</span>
					<span> - {item.price}$ </span>
					<Button
						handleClick={() => {
							removeFromCart(item);
						}}
					>
						Delete from Cart
					</Button>
				</div>
			))}
			<div>Total Amount: {totalQuantity}</div>
			<div>Total Price: {totalPrice} $</div>
			<hr />
		</div>
	);
};

export default BasketSummary;
