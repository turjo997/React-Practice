import React from 'react';
import { add } from '../../utilities/Calculate';

const Cosmetics = () => {
    const first = 60;
    const second = 40;
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            <p>Total is : {total}</p>
        </div>
    );
};

export default Cosmetics;