import React, { useState } from 'react';
import products from '../data/products';


const QuickOrder = ({ addToCart }) => {
    const [form, setForm] = useState({
        id: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ [name]: value });
    }
    const handleSubmit = event => {
        if (form.id === "") {
            alert("User is invalid, potomuchto nuzhno zapolnyat' polya");
            return;
        }
        const existedProduct = products.find(p => p.id === parseInt(form.id));
        existedProduct && addToCart(existedProduct);
    };
    return (
        <div>
            <hr />
            <input type="text" name="id" value={form.id} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Add to Cart</button>
            <hr />
        </div>
    )
}
export default QuickOrder;