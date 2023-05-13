import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const EditUser = () => {
    const id = useParams().id;

    var navigate = useNavigate();
    const{
        register,
        handleSubmit,
        formState: { errors },
        }=useForm({
            defaultValues: async () => {
                const res = await axios.get(`http://localhost:9999/users/${id}`);
                console.log(res.data);
                return (
                    {
                        name: res.data.name,
                        email: res.data.email,
                    }
                )
            } 
        });

        const updateUser = async (data) => {
            var user = {
                name: data.name,
                email: data.email,
            }
            const res = await axios.put(`http://localhost:9999/users/${id}`, user);
            console.log(res);
            if(res.status===200){
                toast.success("record updated....", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                navigate("/listuser");
            }
        };
    
  return (
    <div>
        EditUser
        <br/>
        <form onSubmit={handleSubmit(updateUser)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Update User</button>
            </div>
        </form>
    </div>
  );
};
