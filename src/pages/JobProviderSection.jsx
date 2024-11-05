import React, { useState, useEffect } from 'react';
import ProviderDetails from '../components/ProviderDetails';
import Workers from '../components/Workers';
import Loader from '../components/Loader'; // Import the Loader component

const JobProviderSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a timeout
    const fetchData = async () => {
      // Replace this with your actual data fetching logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading time
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: '"Arial", sans-serif', color: '#333', position: 'relative', minHeight: '100vh' }}>
      <h2 style={{ color: '#34765A' }}>Job Provider Section</h2>
      
      {/* Show Loader if loading is true */}
      {loading ? (
        <div style={{
          position: 'absolute',
          scale:'2',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}>
          <Loader />
        </div>
      ) : (
        <>
          <ProviderDetails />
          <Workers />
        </>
      )}
    </div>
  );
};

export default JobProviderSection;
