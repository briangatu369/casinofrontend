import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const response = api.get(url);
      setData(response.data);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, hasError, data };
};

export default useFetch;
