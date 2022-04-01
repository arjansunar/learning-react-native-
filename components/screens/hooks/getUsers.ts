import {useState, useEffect, useCallback} from 'react';
import {randomPersonApi} from '../../../api';

type Method = 'get' | 'post' | 'patch' | 'delete';

type AxiosInputs = {
  url: string;
  method: Method;
  body?: any;
  headers?: any;
};

export const useAxios = ({url, method, body, headers}: AxiosInputs) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    randomPersonApi[method](url, JSON.parse(headers), JSON.parse(body))
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [method, url, body, headers]);

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers, fetchData]);

  return {response, error, loading};
};
