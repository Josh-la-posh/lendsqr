import React, { useEffect, useState } from "react";
import { URL } from "../url";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [data, setData] = useState(null);

  function getDataFromApi() {
    const fetchedData = fetch(`${URL}`)
      .then((request) => request.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));

    if (fetchedData) {
      console.log(data);
      return;
    } else {
      console.log("No data fetched");
    }
  }

  useEffect(() => {
    getDataFromApi();
  }, []);

  return <div><Sidebar /></div>;
}
