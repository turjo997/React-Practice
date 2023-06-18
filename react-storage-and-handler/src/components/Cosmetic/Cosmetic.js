import React from 'react';
import './Cosmetic.css';
import { addToDb } from '../../utilities/fakeDB';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {

        addToDb(id);
        //console.log('item added', id);
    }

    // const addToCardWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>Only for : ${price}</p>
            <p><small>it has id : {id}</small></p>
            {/* <button onClick={addToCardWithParam}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart :: Alternative</button>

        </div>
    );
};

export default Cosmetic;