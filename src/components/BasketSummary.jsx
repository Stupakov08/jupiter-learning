import React from 'react';
import BasketLine from './BasketLine';

const BasketSummary = ({
	products,
	totalAmount,
	totalPrice,
	removeFromCart
}) => {
	return products.length === 0 ? null : (
		<div>
			<div>
				{products.map(item => <BasketLine key={item.id} product={item} removeFromCart={removeFromCart} />)}
			</div>
			<div>Total Amount: {totalAmount}</div>
			<div>Total Price: {totalPrice} $</div>
			<hr />
		</div>
	);
};

export default BasketSummary;
