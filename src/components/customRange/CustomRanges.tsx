import React from 'react';
import './cusromRenges.scss'

const CustomRanges = () => {
    return (
        <div style={{padding: '10px'}}>
            <input  type="range" min="0" max="200" defaultValue="0" className="slider" id="lower"/>
            <input type="range" min="0" max="200" defaultValue="200" className="slider" id="higher"/>
        </div>
    );
};

export default CustomRanges;