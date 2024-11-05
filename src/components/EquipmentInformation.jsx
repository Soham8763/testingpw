import React, { useState, useEffect } from 'react';

const EquipmentInformation = ({ selectedEquipments }) => {
    const [equipment, setEquipment] = useState({
        lawn_mower: false,
        power_washer: false,
        spreader: false,
        electric_lawn_mower: false,
        truck_and_trailer: false,
        leaf_blower: false,
        aerator: false,
        weed_whacker: false,
        snow_plow: false,
        hedge_trimmer: false,
    });

    useEffect(() => {
        setEquipment((prevEquipment) =>
            Object.keys(prevEquipment).reduce((acc, key) => {
                acc[key] = selectedEquipments.includes(key);
                return acc;
            }, {})
        );
    }, [selectedEquipments]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setEquipment(prevEquipment => ({
            ...prevEquipment,
            [name]: checked,
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
        fontSize: '24px',
        color: '#333',
        marginBottom: '15px',
        fontWeight: 'bold',
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        color:'#34765A'
      },
      grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        marginTop: '10px',
      },
      checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      checkboxLabel: {
        marginLeft: '8px',
        fontWeight: 'bold',
        color: '#555',
      },
    };
    return (
      <div style={styles.container}>
      <h2 style={styles.title}>Equipment Information</h2>

      <div style={styles.grid}>
        {Object.entries(equipment).map(([item, isChecked]) => (
          <div style={styles.checkboxContainer} key={item}>
            <input 
              type="checkbox" 
              name={item} 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
            />
            <label style={styles.checkboxLabel}>
              {item.replace(/([A-Z])/g, ' $1')}
            </label>
          </div>
        ))}
      </div>
    </div>
    );
};

export default EquipmentInformation;










