import React, { useState, useEffect } from "react";
import './img.scss';

export default function Girl() {
  const [img, setImg] = useState([]);

  async function fetchData() {
    const res = await fetch("http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/55");

    res.json().then(res => setImg(res.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(img);
  return (
    <div>
      {img.map((item, index) => {
        console.log(item.url);
        return <img src={item.url} alt={index} key={item._id} />;
      })}
    </div>
  );
}
