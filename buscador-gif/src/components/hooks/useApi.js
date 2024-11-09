
import { useState, useEffect } from "react";

const useApi = (initialUrl = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);

  const fetchData = async (apiUrl) => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const result = await res.json();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching the data", error);
    } finally {
      setLoading(false);
    }
  };

  const searchGifs = (category) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=b1rcyqb5LM70LffjvuMqtVfAbYO4TZkr&q=${category}&limit=15`;
    setUrl(apiUrl);
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  return { data, loading, searchGifs };
};

export default useApi;

