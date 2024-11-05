import React, { useState } from 'react';

const PlowzTalk = () => {
    const [enable, setEnable] = useState(true);

    const fontStyle = {
        fontFamily: '"Arial", sans-serif',
        color: '#333',
    };

    return (
        <div style={{ padding: '10px', backgroundColor: '#f7f7f7' }}>
            <h3 style={{ margin: 0, color: '#34765A', fontFamily: fontStyle.fontFamily }}>PlowzTalk</h3>
            <label style={{ fontSize: '14px', ...fontStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <input 
                    type="checkbox" 
                    checked={enable} 
                    onChange={() => setEnable(!enable)}
                /> 
                Want to enable?
            </label>
        </div>
    );
};

export default PlowzTalk;
