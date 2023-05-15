import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ListUser = () => {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
    const getUserDetail = async () => {
    const res = await axios.get("http://localhost:9999/users");
    // console.log(res.data);
    setusers(res.data);
  };

  const addUser = async () => {
    const res = await axios.post("http://localhost:9999/users", {
      name: name,
      email: email,
    });
    console.log(res);
    // setemail('')
    // setname('');
    if(res.status===201){
        toast.success("record added....", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        getUserDetail();
    }
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:9999/users/${id}`);
    console.log(res);
    if(res.status===204){
        toast.success("record deleted....", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        getUserDetail();
    }
    };
    useEffect(() => {
    getUserDetail();
    }, []);
    return (
    <div>
        <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        <h1>
            List User
        </h1>
        <table className="table">
    <thead>
        <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">email</th>
        <th scope="col">action</th>
        </tr>
    </thead>
    <tbody>
    {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>{deleteUser(user._id)}} className="btn btn-danger">DELETE</button>
                    &nbsp; &nbsp;
                    <Link to = {`/edituser/${user._id}`} className="btn btn-info">EDIT</Link>
                </td>

              </tr>
            );
          })}
    </tbody>
    </table>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input onChange={(e)=>{setname(e.target.value)}} type="text" value={name} placeholder="Enter name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input onChange={(e)=>{setemail(e.target.value)}} type="email" value={email} placeholder="Enter email"/>
        </div>
    <button onClick={addUser} className="btn btn-success" type='submit'>ADD USER</button>
    </form>
        </div>
  )
}
