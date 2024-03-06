import { useState, useEffect } from 'react'
// import axios from 'axios'

const Fetch = (uuid) => {

  const BASE_DOMAIN = import.meta.env['VITE_RBOOT_DOMAIN'];

  const API_ENDPOINT = import.meta.env['VITE_RBOOT_ENDPONT'];

  const MODE = import.meta.env['VITE_RBOOT_MODE'];

  const [restData, setData] = useState({});

  const [restLoading, setLoading] = useState(true);

console.log(MODE)
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`${BASE_DOMAIN}${API_ENDPOINT}${uuid}`, {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json, text/plain, */*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Request-Headers': '*'
        }).then((res) => {
          return res.json()
        }).then((res) => {
          setLoading(false)
          setData(res);
        })
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, []);

  return {
    restData,
    restLoading,
  };
};

export default Fetch
