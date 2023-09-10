"use client"
import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [dataUser, setDataUser] = useState({});

  useEffect(async () => {
    try {
      let getData = await fetch("https://reqres.in/api/users/1");
      let response = await getData.json();
      setDataUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count - 1)}>-</button>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <br />
      <hr />
      <br />
      <h1>{dataUser ? dataUser.email : "loading.."}</h1>
    </div>
  )
}

export default Count;