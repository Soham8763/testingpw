import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; 
import WorkerProfile from '../components/WorkerProfile';
import ServiceInformation from '../components/ServiceInformation';
import EquipmentInformation from '../components/EquipmentInformation';
import StripeAutoPayEnable from '../components/StripeAutoPayEnable';
import Documents from '../components/Documents';
import TestAccount from '../components/TestAccount';
import PartnerPages from '../components/PartnerPages';
import PlowzTalk from '../components/PlowzTalk';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

const JobWorkerSection = () => {
    const [workerData, setWorkerData] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchData = async () => {
                // Hardcoded data for now
                const data = {
                    name: "Test Test",
                    driverId: "4334234234",
                    email: "ecrfx@yopmail.com",
                    password: "70872d0cdf75be9b8a2d26f897b691c54403a4c0",
                    phone: "3096912745",
                    countryCode: "1",
                    centralAddress: "105 Greenwich Street, New York, NY, USA",
                    centralCoordinates: [-74.0089982, 40.7273745],
                    coordinates: [-74.0089025548143, 40.727110254598955],
                    radius: 20,
                    jobLimit: 100,
                    dailyJobLimit: 10,
                    isAdmin: true,
                    isLive: true,
                    activatedForPlowz: true,
                    activatedForMowz: false,
                    activatedForShoveling: false,
                    activatedForSnowBlowing: false,
                    autoRoute: false,
                    withOutAddons: false,
                    zipCodes: [],
                    dispatchOnly: false,
                    services: [
                        "mowz", "plowz", "leavz", "mulch", "drivewaysealing",
                        "customquote", "fertilizing", "haulaway", "aeration",
                        "bug_spray", "mosquito_repellents", "petwaste",
                        "firewood", "sprinkler", "photography", "salting"
                    ],
                    equipments: [
                        "lawn_mower", "truck_and_trailer", "weed_whacker",
                        "power_washer", "leaf_blower", "snow_plow",
                        "spreader", "aerator", "hedge_trimmer", "electric_lawn_mower"
                    ],
                    autoPayEnable: 1,
                    isTestAccount: false,
                    UUID: "Bhat",
                    enablePartnersPages: false,
                    showMyPhoto: false
                };

                setWorkerData(data);
                setLoading(false); // Set loading to false after fetching
            };

            fetchData();
        }, 2000); // Show loader for 2 seconds

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const handleSubmitButton = (e) => {
        e.preventDefault();
        console.log("Submitted data");
    };

    const handleCancelButton = () => {
        console.log("Cancelled");
    };

    if (loading) {
        return (
            <div style={styles.loaderContainer}>
                <Loader />
            </div>
        ); // Show Loader while loading
    }

    return (
        <form onSubmit={handleSubmitButton}>
            {workerData ? (
                <>
                    <WorkerProfile profileData={workerData} />
                    <ServiceInformation selectedServices={workerData.services} />
                    <EquipmentInformation selectedEquipments={workerData.equipments} />
                    <StripeAutoPayEnable autoPayEnable={workerData.autoPayEnable} />
                    <Documents />
                    <TestAccount isTestAccount={workerData.isTestAccount} />
                    <PartnerPages
                        uuid={workerData.UUID}
                        enablepartnerpages={workerData.enablePartnersPages}
                        showmyphoto={workerData.showMyPhoto}
                    />
                    <PlowzTalk />
                </>
            ) : (
                <div>
                    <Skeleton height={40} count={5} style={{ marginBottom: '10px' }} />
                </div>
            )}
            <div style={{ backgroundColor: '#f7f7f7', display: 'flex', gap: '0.5vw' }}>
                <button
                    style={{
                        width: '4vw',
                        height: '2vw',
                        backgroundColor: '#34765A',
                        border: 'none',
                        borderRadius: '0.4vw',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                    type="submit"
                >
                    Save
                </button>
                <button
                    onClick={handleCancelButton}
                    style={{
                        width: '4vw',
                        height: '2vw',
                        backgroundColor: 'red',
                        border: 'none',
                        borderRadius: '0.4vw',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

const styles = {
    loaderContainer: {
        display: 'flex',
        scale:"2",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Reduced opacity
        zIndex: 9999, // Ensure it's on top
    },
};

export default JobWorkerSection;





// import React, { useState, useEffect } from 'react';
// import Loader from '../components/Loader'; // Import the Loader component
// import WorkerProfile from '../components/WorkerProfile';
// import ServiceInformation from '../components/ServiceInformation';
// import EquipmentInformation from '../components/EquipmentInformation';
// import StripeAutoPayEnable from '../components/StripeAutoPayEnable';
// import Documents from '../components/Documents';
// import TestAccount from '../components/TestAccount';
// import PartnerPages from '../components/PartnerPages';
// import PlowzTalk from '../components/PlowzTalk';

// const JobWorkerSection = () => {
//     const [workerData, setWorkerData] = useState(null);
//     const [loading, setLoading] = useState(true); // Loading state

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             const fetchData = async () => {
//                 // Hardcoded data for now
//                 const data = {
//                     name: "Test Test",
//                     driverId: "4334234234",
//                     email: "ecrfx@yopmail.com",
//                     password: "70872d0cdf75be9b8a2d26f897b691c54403a4c0",
//                     phone: "3096912745",
//                     countryCode: "1",
//                     centralAddress: "105 Greenwich Street, New York, NY, USA",
//                     centralCoordinates: [-74.0089982, 40.7273745],
//                     coordinates: [-74.0089025548143, 40.727110254598955],
//                     radius: 20,
//                     jobLimit: 100,
//                     dailyJobLimit: 10,
//                     isAdmin: true,
//                     isLive: true,
//                     activatedForPlowz: true,
//                     activatedForMowz: false,
//                     activatedForShoveling: false,
//                     activatedForSnowBlowing: false,
//                     autoRoute: false,
//                     withOutAddons: false,
//                     zipCodes: [],
//                     dispatchOnly: false,
//                     services: [
//                         "mowz", "plowz", "leavz", "mulch", "drivewaysealing",
//                         "customquote", "fertilizing", "haulaway", "aeration",
//                         "bug_spray", "mosquito_repellents", "petwaste",
//                         "firewood", "sprinkler", "photography", "salting"
//                     ],
//                     equipments: [
//                         "lawn_mower", "truck_and_trailer", "weed_whacker",
//                         "power_washer", "leaf_blower", "snow_plow",
//                         "spreader", "aerator", "hedge_trimmer", "electric_lawn_mower"
//                     ],
//                     autoPayEnable: 1,
//                     isTestAccount: false,
//                     UUID: "Bhat",
//                     enablePartnersPages: false,
//                     showMyPhoto: false
//                 };

//                 setWorkerData(data);
//                 setLoading(false); // Set loading to false after fetching
//             };

//             fetchData();
//         }, 1000); 

//         return () => clearTimeout(timer); // Clean up the timer
//     }, []);

//     const handleSubmitButton = (e) => {
//         e.preventDefault();
//         console.log("Submitted data");
//     };

//     const handleCancelButton = () => {
//         console.log("Cancelled");
//     };

//     if (loading) {
//         return (
//             <div style={styles.loaderContainer}>
//                 <Loader />
//             </div>
//         ); // Show Loader while loading
//     }

//     return (
//         <form onSubmit={handleSubmitButton}>
//             <WorkerProfile profileData={workerData} />
//             <ServiceInformation selectedServices={workerData.services} />
//             <EquipmentInformation selectedEquipments={workerData.equipments} />
//             <StripeAutoPayEnable autoPayEnable={workerData.autoPayEnable} />
//             <Documents />
//             <TestAccount isTestAccount={workerData.isTestAccount} />
//             <PartnerPages
//                 uuid={workerData.UUID}
//                 enablepartnerpages={workerData.enablePartnersPages}
//                 showmyphoto={workerData.showMyPhoto}
//             />
//             <PlowzTalk />
//             <div style={{ backgroundColor: '#f7f7f7', display: 'flex', gap: '0.5vw' }}>
//                 <button
//                     style={{
//                         width: '4vw',
//                         height: '2vw',
//                         backgroundColor: '#34765A',
//                         border: 'none',
//                         borderRadius: '0.4vw',
//                         color: 'white',
//                         cursor: 'pointer'
//                     }}
//                     type="submit"
//                 >
//                     Save
//                 </button>
//                 <button
//                     onClick={handleCancelButton}
//                     style={{
//                         width: '4vw',
//                         height: '2vw',
//                         backgroundColor: 'red',
//                         border: 'none',
//                         borderRadius: '0.4vw',
//                         color: 'white',
//                         cursor: 'pointer'
//                     }}
//                     type="button"
//                 >
//                     Cancel
//                 </button>
//             </div>
//         </form>
//     );
// };

// const styles = {
//     loaderContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'fixed',
//         scale:'2.4',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(255, 255, 255, 0.5)', // Reduced opacity
//         zIndex: 9999, // Ensure it's on top
//     },
// };

// export default JobWorkerSection;

