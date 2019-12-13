import React, { useState, useLayoutEffect } from "react";
import { fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";

export default function FromEvent() {
  const [text, setText] = useState("");

  // useLayoutEffect(() => {
  //   document.querySelector("input").value = text;
  // }, [text]);
  console.log(text);

  const handleChange = e => {
    fromEvent(document.querySelector("input"), "input")
      .pipe(switchMap(e => e.target.value))
      .subscribe(val => {
        console.log(val);
        setText(val);
      });
  };

  return <input type="text" onChange={handleChange} />;
}
