import React from 'react'
import Button from './primitives/Button'

export default function ProductListItem({ product, addToCart }) {
    const handleClick = () => {
        addToCart(product);
    }

    return (
        <div>
            <span>{product.title}</span>
            <span> - {product.price} $ </span>
            <Button handleClick={handleClick}>
                Add to Cart
			</Button>
        </div>
    )
}
