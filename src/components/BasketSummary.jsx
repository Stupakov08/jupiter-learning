import React from 'react';
import Button from './primitives/Button';

const BasketSummary = ({
	products,
	totalAmount,
	totalPrice,
	removeFromCart
}) => {
	return products.length === 0 ? null : (
		<div>
			{products.map(item => (
				<div key={item.key}>
					<span>{item.title}</span>
					<span> - {item.price}</span>
					<Button
						handleClick={() => {
							removeFromCart(item);
						}}
					>
						Delete from Cart
					</Button>
				</div>
			))}
			<div>Total Amount: {totalAmount}</div>
			<div>Total Price: {totalPrice} $</div>
			<hr />
		</div>
	);
};

export default BasketSummary;
