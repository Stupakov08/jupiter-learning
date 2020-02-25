import React from 'react';
import Button from './primitives/Button';

const ProductList = props => {
	React.useEffect(() => {
		//FOR DEV
		console.log("ProductList");
	})
	return (
		<div>
			<b>Product List:</b>
			{props.products &&
				props.products.map(item => (
					<div key={item.id}>
						<span><b>{item.id}</b> - </span>
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

export default React.memo(ProductList);
