import React from "react";

export default function User() {
  fetch(
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-917053D7-0F5A-4886-B1DF-E2E8BC8387CC&locationName=%E8%87%BA%E5%8C%97%E5%B8%82"
  ).then(response => console.log(response.json()));
  return <div>123</div>;
}
