import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <h1 style= {{textAlign: "center"}}> {greeting}</h1>
        </div>
    );
}

export default ItemListContainer;
