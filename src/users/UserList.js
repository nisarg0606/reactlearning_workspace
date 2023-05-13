import React from "react";

export const UserList = (props) => {
  return (
    <div>
      <h1>USER LIST</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((u) => {
            return (
              <tr>
                <th scope="row">{u.id}</th>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
                <td>{u.age}</td>
                <td><button onClick={()=>{props.deleteUser(u.id)}} className="btn btn-danger">DELETE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
