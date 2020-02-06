import React from 'react'
import Button from './primitives/Button'

export default function BasketLine({ product, removeFromCart }) {
    const handleClick = () => {
        removeFromCart(product);
    }

    return (
        <div>
            <span>{product.title}</span>
            <span> - {product.price}</span>
            <Button handleClick={handleClick}>
                Delete from Cart
			</Button>
        </div>
    )
}
