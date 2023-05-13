import React, { useState } from 'react'
import { UserList } from './UserList';

export const Users = () => {
  var users = [
    {
        id: 1,
        name: "Nisarg",
        email: "nisarg@gmail.com",
        age: 22,
        gender: "Male",
    },
    {
        id: 2,
        name: "Amit",
        email: "amit@gmail.com",
        age: 23,
        gender: "Male",
    },
    {
        id: 3,
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 24,
        gender: "Male",
    },
];

    const [userData, setUserData] = useState(users);

    function deleteUser(id) {
        var newUsers = userData.filter((user) => user.id !== id);
        setUserData(newUsers);
    }
    return (
        <div>
            <UserList users ={userData} deleteUser = {deleteUser}/>
        </div>
      );
};
