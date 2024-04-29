import { useState } from 'react';
import axios from 'axios';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = axios.create({
    baseURL: 'https://api.tiburoncin.lat/32246' //URL del API
  });
  const sendRequest = async (config) => {
    setLoading(true);
    try {
      const response = await api(config);
      return response.data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, sendRequest };
};
export default useApi;
