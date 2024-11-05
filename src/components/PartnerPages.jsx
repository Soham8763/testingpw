import React from 'react';

const PartnerPages = ({ uuid = "workers-profile", enablepartnerpages, showmyphoto }) => {
    const fontStyle = {
        fontFamily: '"Arial", sans-serif',
        color: '#333',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', backgroundColor: '#f7f7f7' }}>
            <h3 style={{ margin: 0, color: '#34765A', fontFamily: fontStyle.fontFamily }}>Partner Pages</h3>
            
            <label style={{ fontSize: '14px', ...fontStyle }}>
                UUID:
                <input 
                    type="text" 
                    value={uuid}
                    readOnly
                    style={{ marginLeft: '5px', padding: '5px', width: '150px' }}
                />
            </label>
            
            <label style={{ fontSize: '14px', ...fontStyle, display: 'flex', alignItems: 'center' }}>
                <input 
                    type="checkbox" 
                    checked={enablepartnerpages}
                    readOnly
                    style={{ marginRight: '5px' }} 
                /> 
                Enable Partner Pages
            </label>
            
            <label style={{ fontSize: '14px', ...fontStyle, display: 'flex', alignItems: 'center' }}>
                <input 
                    type="checkbox" 
                    checked={showmyphoto}
                    readOnly
                    style={{ marginRight: '5px' }} 
                /> 
                Show my photo
            </label>
        </div>
    );
};

export default PartnerPages;
