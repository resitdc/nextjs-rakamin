import React from "react";

const Login = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Login</h1>
      {JSON.stringify(data)}
    </div>
  )
}

export const getData = async () => {
  const data = await fetch("https://reqres.in/api/users/1", { next: { revalidate: 60 * 60 * 24 } });
  const response = await data.json();
  return response;
}

export default Login;