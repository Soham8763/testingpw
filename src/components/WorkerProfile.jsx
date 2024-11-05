import React, { useState } from 'react';

const WorkerProfile = ({ profileData }) => {
  const displayFields = [
    'name',
    'email',
    'phone',
    'countryCode',
    'centralAddress',
    'centralCoordinates',
    'coordinates',
    'radius',
    'jobLimit',
    'dailyJobLimit',
    'zipCodes',
    'isLive',
    'isAdmin',
    'activatedForPlowz',
    'activatedForMowz',
    'activatedForShoveling',
    'activatedForSnowBlowing',
    'withOutAddons',
    'autoRoute',
    'dispatchOnly',
  ];

  const [profile, setProfile] = useState({
    name: profileData.name || '',
    email: profileData.email || '',
    phone: profileData.phone || '',
    countryCode: profileData.countryCode || '',
    centralAddress: profileData.centralAddress || '',
    centralCoordinates: profileData.centralCoordinates || '',
    coordinates: profileData.coordinates || '',
    radius: profileData.radius || 10,
    jobLimit: profileData.jobLimit || 10,
    dailyJobLimit: profileData.dailyJobLimit || 10,
    zipCodes: profileData.zipCodes || [],
    isLive: profileData.isLive || false,
    isAdmin: profileData.isAdmin || false,
    activatedForPlowz: profileData.activatedForPlowz || false,
    activatedForMowz: profileData.activatedForMowz || false,
    activatedForShoveling: profileData.activatedForShoveling || false,
    activatedForSnowBlowing: profileData.activatedForSnowBlowing || false,
    withOutAddons: profileData.withOutAddons || false,
    autoRoute: profileData.autoRoute || false,
    dispatchOnly: profileData.dispatchOnly || false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setProfile(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const styles = {
    container: {
      width: '100%',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
      color: "#34765A"
    },
    fieldCard: {
      display: 'inline-block',
      width: 'calc(33.33% - 40px)',
      margin: '10px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    label: {
      fontWeight: 'bold',
      color: '#555',
      marginBottom: '5px',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    buttonContainer: {
      marginTop: '20px',
      textAlign: 'center',
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      backgroundColor: '#34765A',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#5DAE8D',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Worker Profile</h2>

      {displayFields.map((key) => (
        <div style={styles.fieldCard} key={key}>
          {typeof profile[key] === 'boolean' ? (
            <div style={styles.checkboxContainer}>
              <input 
                type="checkbox" 
                name={key} 
                checked={profile[key]} 
                onChange={handleChange} 
              />
              <label style={styles.label}>{key.replace(/([A-Z])/g, ' $1')}</label>
            </div>
          ) : (
            <>
              <label style={styles.label}>{key.replace(/([A-Z])/g, ' $1')}:</label>
              <input
                type={'text'} 
                // {key === 'password' ? 'password' : 'text'} to keep the password hidden 
                name={key}
                value={Array.isArray(profile[key]) ? profile[key].join(', ') : profile[key]}
                onChange={handleChange}
                style={styles.input}
              />
            </>
          )}
        </div>
      ))}

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default WorkerProfile;
