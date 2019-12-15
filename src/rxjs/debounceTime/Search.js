import React, { useState, useEffect } from "react";
import { fromEvent } from "rxjs";
import { map, debounceTime } from "rxjs/operators";
import axios from "axios";
import Input from "./Input";
import Img from "./Img";

const useFromEvent = () => {
  const [text, setText] = useState(1);

  useEffect(() => {
    const subscription = fromEvent(document.querySelector("#search"), "input")
      .pipe(
        debounceTime(300),
        map(e => e.target.value)
      )
      .subscribe(value => setText(value));
    return () => subscription.unsubscribe();
  }, [text]);

  return text;
};

const Search = () => {
  const text = useFromEvent();
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState([]);
  const [url, setUrl] = useState(
    "http://gank.io/api/data/%E7%A6%8F%E5%88%A9/4/1"
  );

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await axios(url);
      setImg(res.data.results);
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    if (text) {
      setUrl(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/4/${text}`);
    }
  }, [text]);

  return (
    <>
      <Input />
      <br />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        img.map((item, index) => {
          return (
            <Img src={item.url} alt={index} key={item._id} />
          );
        })
      )}
    </>
  );
};

export default Search;
