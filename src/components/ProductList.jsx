import React from 'react';
import Button from './primitives/Button';

const ProductList = props => {
	return (
		<div>
			{props.products &&
				props.products.map(item => (
					<div key={item.id}>
						<span>{item.title}</span>
						<span> - {item.price} $ </span>
						<Button
							handleClick={() => {
								props.addToCart(item);
							}}
						>
							Add to Cart
						</Button>
					</div>
				))}
		</div>
	);
};

export default ProductList;
