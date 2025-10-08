// fetching api data

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Usage
function App() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  if (loading) return <h1>Loading...</h1>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
