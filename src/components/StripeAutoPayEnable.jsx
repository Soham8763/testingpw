import React, { useState, useEffect } from 'react';

const StripeAutoPayEnable = ({ autoPayEnable }) => {
    const [selectedValue, setSelectedValue] = useState(autoPayEnable);

    useEffect(() => {
        setSelectedValue(autoPayEnable);
    }, [autoPayEnable]);

    const fontStyle = {
        fontFamily: '"Arial", sans-serif',
        color: '#555',
    };

    return (
        <div style={{padding: '10px', width: '100vw', backgroundColor: '#f7f7f7'}}>
            <div style={{ padding: '10px', width: '300px', backgroundColor: '#f7f7f7' }}>
            <h3 style={{ margin: 0, color: '#34765A', fontFamily: fontStyle.fontFamily }}>Stripe Auto Pay Enable</h3>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <select 
                    value={selectedValue} 
                    onChange={(e) => setSelectedValue(Number(e.target.value))}
                    style={{ padding: '10px', width: '100%', fontSize: '16px', fontFamily: fontStyle.fontFamily }}
                >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>

                <div style={{ marginLeft: '20px', fontSize: '16px', ...fontStyle }}>
                    <p style={{ margin: 0 }}><strong>0:</strong> Auto Pay is disabled</p>
                    <p style={{ margin: 0 }}><strong>1:</strong> Auto Pay is enabled</p>
                    <p style={{ margin: 0 }}><strong>2:</strong> AC created by worker</p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default StripeAutoPayEnable;
