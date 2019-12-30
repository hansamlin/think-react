import React, { useState, useEffect } from "react";
import "./img.scss";

export default function Girl() {
  const [img, setImg] = useState([]);
  const [num, setNum] = useState('');
  const [url, setUrl] = useState(
    "http://gank.io/api/data/%E7%A6%8F%E5%88%A9/4/1"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);

      try {
        const res = await fetch(url);
        const resJson = await res.json();
        setImg(resJson.results);
      } catch (err) {
        setIsError(true);
      }

      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  return (
    <div>
      <input type="text" value={num} onChange={e => setNum(e.target.value)} />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/4/${num}`)
        }
      >
        Search
      </button>

      <br />

      {isError && <div>Something wrong...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        img.map((item, index) => {
          return <img src={item.url} alt={index} key={item._id} />;
        })
      )}
    </div>
  );
}
