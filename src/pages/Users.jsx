import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../url";
import axios from "axios";

import UserPage from '../components/UserPage'

export default function Users() {
  const [data, setData] = useState('');
  let {id} = useParams();

  function getDataById() {
    axios.get(`${URL}/${id}`).then((response) => setData(response.data));
  }

  useEffect(() => {
    getDataById();
    console.log(data);
  }, []);
  return (
    <UserPage data={data}/> 
  )
}
