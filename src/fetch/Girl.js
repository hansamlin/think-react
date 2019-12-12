import React, { useState, useEffect } from "react";
import "./img.scss";

export default function Girl() {
  const [img, setImg] = useState([]);
  const [num, setNum] = useState(10);
  const [search, setSearch] = useState(1);
  // const [url, setUrl] = useState(
  // "http://gank.io/api/data/%E7%A6%8F%E5%88%A9/4/1"
  // );

  // function getRandomInt(max) {
  //   return setTimeout(() => {
  //     return setNum(Math.floor(Math.random() * Math.floor(max)));
  //   }, 10);
  // }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://gank.io/api/data/%E7%A6%8F%E5%88%A9/4/${search}`
      );

      res
        .json()
        .then(res => setImg(res.results))
        .catch(err => console.log(err));
    }

    fetchData();
  }, [search]);

  return (
    <div>
      <input type="text" value={num} onChange={e => setNum(e.target.value)} />
      <button type="button" onClick={() => setSearch(num)}>
        Search
      </button>
      <br/>
      {img.map((item, index) => {
        return <img src={item.url} alt={index} key={item._id} />;
      })}
    </div>
  );
}
