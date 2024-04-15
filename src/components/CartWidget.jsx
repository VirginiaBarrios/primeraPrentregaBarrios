import React from 'react';

const CartWidget = () => {
    // Cantidad hardcodeada (fija) de elementos en el carrito
    const itemsInCart = 5;

    return (
        <div className="cart-widget">
            <i className="bi bi-cart"></i>
            <span className="badge colorVioleta">{itemsInCart}</span>
        </div>
    );
}

export default CartWidget;
