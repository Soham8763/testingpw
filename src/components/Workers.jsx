import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Workers = () => {
  const [workers, setWorkers] = useState([{
    "id": "59b7c7fbb2da815d3a00006a",
    "name": "Bhavesh Pai",
    "driverId": "Bhavesh Pai",
    "phone": "9844233552",
    "email": "bhavesh@plowz.com",
    "address": "124 Green Street, Syracuse, NY, USA",
    "isAdmin": false,
    "avgRating": 4.923076923076923,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-10-27T14:05:53.000Z",
    "autoPayEnabled": "AC created by worker",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "59b9003cb2da8132b7000000",
    "name": "Shreyas Iyyer",
    "driverId": "Developer_PNM",
    "phone": "7353121223",
    "email": "shreyas.bangera@springrole.com",
    "address": "104 Green St, Fayetteville, NY, United States",
    "isAdmin": false,
    "avgRating": 4.857142857142857,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-09-26T03:23:57.000Z",
    "autoPayEnabled": "AC created by worker",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "5da83be59faf252cba1ec546",
    "name": "kristen",
    "driverId": "Bhavesh pai international",
    "phone": "3158827154",
    "email": "kristen@plowz1.com",
    "address": "120 Madison Street, Syracuse, NY, USA",
    "isAdmin": true,
    "avgRating": 0,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:03.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "5b7e95b9dfb1df1da600001e",
    "name": "vartest",
    "driverId": "",
    "phone": "9739249751",
    "email": "pai.8.pai@gmail.com",
    "address": "1115 Meadowcrest Rd, La Grange Park, IL 60526, USA",
    "isAdmin": true,
    "avgRating": 4.97,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:04.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "5ddcf9d46cfa307210459125",
    "name": "test _new user ",
    "driverId": "dddd333",
    "phone": "6699666999",
    "email": "newnew@route.com",
    "address": "110 Green Street, Fayetteville, NY, USA",
    "isAdmin": true,
    "avgRating": 0,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:04.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "5e26f1a39906f17cb726addd",
    "name": "VarM LG",
    "driverId": "",
    "phone": "9488467330",
    "email": "varulg@yopmail.com",
    "address": "108 S Royal St, Mobile, AL 36602, USA",
    "isAdmin": true,
    "avgRating": 5,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:04.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "5e2f0a1f8011c2036f2f493f",
    "name": "Natalie",
    "driverId": "camloh",
    "phone": "3156631451",
    "email": "natalie@plowz1.com",
    "address": "114 Green St, Fayetteville, NY, USA",
    "isAdmin": false,
    "avgRating": 0,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:04.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "hybrid"
  },
  {
    "id": "5e2fffa29906f117e1627008",
    "name": "Partha",
    "driverId": "",
    "phone": "8072820792",
    "email": "partha@yopmail.com",
    "address": "110 Spring St, Fayetteville, NY, USA",
    "isAdmin": false,
    "avgRating": 0,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:04.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "5e3029a211e9b8623ac62224",
    "name": "Anusha",
    "driverId": "qatest",
    "phone": "9690669090",
    "email": "anusha@ptalk.com",
    "address": "100 Green Street, Fayetteville, NY, USA",
    "isAdmin": false,
    "avgRating": 4.5,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:04.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "native"
  },
  {
    "id": "608155874614534335a35592",
    "name": "Tom cheta",
    "driverId": "TOmcheta",
    "phone": "9400930483",
    "email": "tom.manuel@springrole.com",
    "address": "113 Green Street, Fayetteville, NY, USA",
    "isAdmin": false,
    "avgRating": 0,
    "live": true,
    "isTest": false,
    "zipCode": [],
    "lastUpdated": "2024-06-25T23:00:04.000Z",
    "autoPayEnabled": "disabled",
    "jobCount": 0,
    "appSource": "native"
  }]);

  // useEffect(() => {
  //   // Fetch workers data from the API 
  //   axios.get('/api/workers') // replace with actual API
  //     .then((response) => {
  //       setWorkers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching workers:', error);
  //     });
  // }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', fontFamily: '"Arial", sans-serif', color: '#333' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color:'#34765A' }}>Workers</div>
        <button style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#34765A', color: '#fff', border: 'none', borderRadius: '5px' }}>New</button>
      </div>
      {/* Rendering tables for each worker */}
      {workers.map((worker, index) => (
        <div
          key={worker.id || index}
          style={{
            marginBottom: '20px',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#fff',
            overflowX: 'auto',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
            <thead>
              <tr style={{ backgroundColor: '#eee', textAlign: 'left' }}>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Name</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Driver ID</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Central Address & Zip Codes</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>E-Mail</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Phone</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Is Admin?</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Avg Rating</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Live?</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>App Source</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Last Updated</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Auto Pay enabled?</th>
                <th style={{ padding: '10px',color:'', border: '1px solid #ccc' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.name || 'N/A'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.driverId || 'N/A'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.address || 'N/A'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.email || 'N/A'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.phone || 'N/A'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.isAdmin ? 'Yes' : 'No'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.avgRating ? worker.avgRating.toFixed(1) : 'N/A'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.live ? 'Yes' : 'No'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{worker.appSource || 'N/A'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  {worker.lastUpdated ? new Date(worker.lastUpdated).toLocaleDateString() : 'N/A'}
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  {worker.autoPayEnabled ? 'Enabled' : 'Disabled'}
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  <button
                    style={{
                      backgroundColor: '#34765A',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    Current Location
                  </button>
                  <button
                    style={{
                      backgroundColor: '#34765A',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    Home Location
                  </button>
                  <button
                    style={{
                      backgroundColor: '#34765A',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: '#34765A',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '3px',
                      marginBottom: '5px',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    Block Customers
                  </button>
                  <button
                    style={{
                      backgroundColor: '#34765A',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '3px',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    Add Stripe AC
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Workers;
