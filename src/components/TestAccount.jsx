import React, { useState } from 'react';

const TestAccount = ({ isTestAccount: initialIsTestAccount }) => {
    const [isTestAccount, setIsTestAccount] = useState(initialIsTestAccount);

    const fontStyle = {
        fontFamily: '"Arial", sans-serif',
        color: '#333',
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', backgroundColor: '#f7f7f7' }}>
            <h3 style={{ margin: 0, color: '#34765A', fontFamily: fontStyle.fontFamily }}>Test Account</h3>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', ...fontStyle }}>
                <input
                    type="checkbox"
                    checked={isTestAccount}
                    onChange={() => setIsTestAccount(!isTestAccount)}
                />
                Is Test Account?
            </label>
        </div>
    );
};

export default TestAccount;
