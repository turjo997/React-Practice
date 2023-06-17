import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid red', margin: '5px' }}>
            <h2>This is Dial : {props.body}</h2>
            <p>So far steps today: {props.steps}</p>
        </div>
    );
};

export default Dial;