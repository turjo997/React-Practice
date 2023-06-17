import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De DOur...</button>
            <Display name="garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch; <h2>This is my smart watch</h2>