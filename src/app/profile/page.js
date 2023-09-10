import React from "react";

const Profile = async () => {
  const data = await getData();
  return (
    <div>
      <h1>List Data</h1>
      <ul>
        {
          data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>

    </div>
  )
}

const getData = async () => {
  const data = [
    {
      id: 1,
      name: "Restu Dwi Cahyo"
    },
    {
      id: 2,
      name: "Monkey D Luffy"
    }
  ];

  return data;
}


export default Profile;