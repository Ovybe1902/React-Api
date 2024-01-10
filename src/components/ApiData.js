// src/ApiData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState({ origin: '', nom: '', age: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://testapi-production-0fb5.up.railway.app/hello');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>{data.nom} - {data.age} - {data.origin}</li>
      </ul>
    </div>
  );
};

export default ApiData;
