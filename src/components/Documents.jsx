import React, { useState } from 'react';

const Documents = () => {
    const [documentName, setDocumentName] = useState('testd');

    const fontStyle = {
        fontFamily: '"Arial", sans-serif',
        color: '#333',
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: '#f7f7f7' }}>
            <h3 style={{ margin: 0, color: '#34765A', fontFamily: fontStyle.fontFamily }}>Documents</h3>
            
            <label style={{ fontSize: '14px', ...fontStyle }}>
                Document Name:
                <select 
                    value={documentName} 
                    onChange={(e) => setDocumentName(e.target.value)}
                    style={{ marginLeft: '5px', padding: '5px', fontFamily: fontStyle.fontFamily }}
                >
                    <option value="testd">testd</option>
                    <option value="testke">testke</option>
                    <option value="testva">testva</option>
                    <option value="testnaga">testnaga</option>
                </select>
            </label>
            
            <input 
                type="file" 
                style={{ padding: '5px', fontFamily: fontStyle.fontFamily }} 
            />

            <button style={{ padding: '5px 10px', backgroundColor: '#34765A', border: 'none', borderRadius: '0.3vw', color: 'white', fontFamily: fontStyle.fontFamily,cursor:'pointer' }}>
                Upload
            </button>
        </div>
    );
};

export default Documents;
