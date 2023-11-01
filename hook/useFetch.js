import { useState, useEffect } from "react";
import { REACT_APP_RAPID_API_KEY } from '@env';

const useFetch = (endpoint, params={}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const rapidApiKey = REACT_APP_RAPID_API_KEY;

  const paramList = [];
  for (let param in params) {
    paramList.push(`${param}=${params[param]}`);
  }

  const url = `https://jsearch.p.rapidapi.com/${endpoint}${paramList.length ? `?${paramList.join('&')}`: ''}`;
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': rapidApiKey,
  		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  	}
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      setError(error);
      alert('Error fetching job data!');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
}

export default useFetch;