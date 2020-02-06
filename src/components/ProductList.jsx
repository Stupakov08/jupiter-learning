import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ products, addToCart }) => {
	return (
		<div>
			{products &&
				products.map(item => (
					<ProductListItem key={item.id} product={item} addToCart={addToCart} />
				))}
		</div>
	);
};

export default ProductList;
