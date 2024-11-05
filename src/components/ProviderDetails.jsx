import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const ProviderDetails = () => {
  const [providerData, setProviderData] = useState(null); // Initially set to null to indicate loading
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Mock API call
    const fetchData = async () => {
      // Simulating network request delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      const data = {
        name: 'Developers_PNM',
        companyName: 'Pai International',
        address: '123 West 42nd Street, New York, NY, United States',
        numOfWorkers: 10,
        jobsOptedFor: [],
        plowzTalk: '',
        google: 'false',
        insurance: 'true',
        generalLiability: 'true',
        testAccount: 'true'
      };

      setProviderData(data);
      setLoading(false); // Set loading to false once data is fetched
    };
    
    fetchData();
  }, []);

  return (
    <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#f5f5f5', fontFamily: '"Arial", sans-serif', color: '#333' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: "#34765A" }}>Provider</div>
      <button style={{ backgroundColor: '#34765A', padding: '5px', marginRight: '5px', color: 'white', borderRadius: '0.3vw', border: 'none' }}>Edit</button>
      <button style={{ backgroundColor: '#34765A', padding: '5px', color: 'white', borderRadius: '0.3vw', border: 'none' }}>Insurance</button>
      
      <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse', color: "black" }}>
        <thead>
          <tr style={{ backgroundColor: '#dcdcdc'}}>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Company Name</th>
            <th style={cellStyle}>Address & Zip Codes</th>
            <th style={cellStyle}>No. of Workers</th>
            <th style={cellStyle}>Jobs Opted For</th>
            <th style={cellStyle}>Plowz Talk</th>
            <th style={cellStyle}>Google</th>
            <th style={cellStyle}>Insurance</th>
            <th style={cellStyle}>Have General Liability Insurance?</th>
            <th style={cellStyle}>Test Account?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {loading ? (
              <>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
                <td style={cellStyle}><Skeleton /></td>
              </>
            ) : (
              <>
                <td style={cellStyle}>{providerData.name}</td>
                <td style={cellStyle}>{providerData.companyName}</td>
                <td style={cellStyle}>{providerData.address}</td>
                <td style={cellStyle}>{providerData.numOfWorkers}</td>
                <td style={cellStyle}>{providerData.jobsOptedFor.join(', ')}</td>
                <td style={cellStyle}>{providerData.plowzTalk}</td>
                <td style={cellStyle}>{providerData.google}</td>
                <td style={cellStyle}>{providerData.insurance}</td>
                <td style={cellStyle}>{providerData.generalLiability}</td>
                <td style={cellStyle}>{providerData.testAccount}</td>
              </>
            )}
          </tr>
        </tbody>
      </table>
      
      <div style={{ marginTop: '10px' }}>
        <button style={buttonStyle}>Availability</button>
        <button style={buttonStyle}>Coverage</button>
        <button style={buttonStyle}>Experiences</button>
        <button style={buttonStyle}>References</button>
        <button style={buttonStyle}>Send Insurance Email</button>
      </div>
    </div>
  );
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  color: "black"
};

const buttonStyle = {
  backgroundColor: '#34765A',
  padding: '5px',
  marginRight: '5px',
  border: 'none',
  borderRadius: '0.3vw',
  color: 'white'
};

export default ProviderDetails;
