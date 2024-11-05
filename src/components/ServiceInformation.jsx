import React, { useState, useEffect } from 'react';

const ServiceInformation = ({ selectedServices }) => {
//         lawnMowing: mowz,
//         electricLawnMowing: elmow,
//         snowPlow: plowz,
//         shoveling: shoveling,
//         snowBlowing: snowblowing,
//         yardCleanUp: leavz,
//         mulchInstall: mulch,
//         drivewaySealing: drivewaysealing,
//         trimmingPruning: trimming,
//         christmasTree: christmas_treez,
//         customJob: customquote,
//         customFertilizing: custom_fertilizing,
//         powerWashing: powerwash,
//         fertilizing: fertilizing,
//         gutterCleanUp: gutter,
//         mosquitoControl: mosquito_repellents,
//         fleaTickSpray: bug_spray,
//         haulAway: haulaway,
//         petWasteRemoval: petwaste,
//         firewoodDelivery: firewood,
//         sprinklerBlowout: sprinkler,
//         aeration: aeration,
//         aerialPhotography: photography,
//         gardeningService: gardenz,
//         saltingService: salting,
    const serviceMap = {
        mowz: { key: 'lawnMowing', display: 'Lawn Mowing' },
        elmow: { key: 'electricLawnMowing', display: 'Electric Lawn Mowing' },
        plowz: { key: 'snowPlow', display: 'Snow Plow' },
        shoveling: { key: 'shoveling', display: 'Shoveling' },
        snowblowing: { key: 'snowBlowing', display: 'Snow Blowing' },
        leavz: { key: 'yardCleanUp', display: 'Yard Clean Up' },
        mulch: { key: 'mulchInstall', display: 'Mulch Install' },
        drivewaysealing: { key: 'drivewaySealing', display: 'Driveway Sealing' },
        trimming: { key: 'trimmingPruning', display: 'Trimming & Pruning' },
        christmas_treez: { key: 'christmasTree', display: 'Christmas Tree' },
        customquote: { key: 'customJob', display: 'Custom Job' },
        custom_fertilizing: { key: 'customFertilizing', display: 'Custom Fertilizing' },
        powerwash: { key: 'powerWashing', display: 'Power Washing' },
        fertilizing: { key: 'fertilizing', display: 'Fertilizing' },
        gutter: { key: 'gutterCleanUp', display: 'Gutter Clean Up' },
        mosquito_repellents: { key: 'mosquitoControl', display: 'Mosquito Control' },
        bug_spray: { key: 'fleaTickSpray', display: 'Flea & Tick Spray' },
        haulaway: { key: 'haulAway', display: 'Haul Away' },
        petwaste: { key: 'petWasteRemoval', display: 'Pet Waste Removal' },
        firewood: { key: 'firewoodDelivery', display: 'Firewood Delivery' },
        sprinkler: { key: 'sprinklerBlowout', display: 'Sprinkler Blowout' },
        aeration: { key: 'aeration', display: 'Aeration' },
        photography: { key: 'aerialPhotography', display: 'Aerial Photography' },
        gardenz: { key: 'gardeningService', display: 'Gardening Service' },
        salting: { key: 'saltingService', display: 'Salting Service' },
    };

    // Initialize services state
    const [services, setServices] = useState(Object.fromEntries(
        Object.values(serviceMap).map(service => [service.key, false])
    ));

    useEffect(() => {
        // Update checked state based on selected services
        const updatedServices = { ...services };
        selectedServices.forEach(selected => {
            const serviceInfo = serviceMap[selected];
            if (serviceInfo) {
                updatedServices[serviceInfo.key] = true;
            }
        });
        setServices(updatedServices);
    }, [selectedServices]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setServices(prevServices => ({
            ...prevServices,
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
            borderBottom: '2px solid black',
            paddingBottom: '10px',
            color: '#34765A',
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
            <h2 style={styles.title}>Service Information</h2>

            <div style={styles.grid}>
                {Object.entries(services).map(([service, isChecked]) => {
                    const serviceInfo = Object.values(serviceMap).find(info => info.key === service);
                    return (
                        <div style={styles.checkboxContainer} key={service}>
                            <input 
                                type="checkbox" 
                                name={service} 
                                checked={isChecked} 
                                onChange={handleCheckboxChange} 
                            />
                            <label style={styles.checkboxLabel}>
                                {serviceInfo ? serviceInfo.display : service.replace(/([A-Z])/g, ' ')} {/* Display correct service name */}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceInformation;