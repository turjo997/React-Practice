import React from 'react';
import { multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const first = 60;
    const second = 40;
    const total = multiply(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Total is : {total}</p>
        </div>
    );
};

export default Shoes;