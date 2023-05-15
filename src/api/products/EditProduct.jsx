import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { Products } from '../../products/Products';

export const EditProduct = () => {
    const id = useParams()._id;
    const name = useParams().name;
    const price = useParams().price;
    const quantity = useParams().quantity;
    const description = useParams().description;
    const discountedPrice = useParams().discountedPrice;

    var navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            return (
                {
                    name: name,
                    price: price,
                    quantity: quantity,
                    description: description,
                    discountedPrice: discountedPrice,
    }
            );
        }
    });

    const updateProduct = async (data) => {
        var product = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            discountedPrice: data.discountedPrice,
        }
        Products.editProduct(id, product);
        navigate("/products");
    };

  return (
    <div>EditProduct
        <br />
        <form onSubmit={handleSubmit(updateProduct)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                <label htmlFor="price">Price</label>
                <input type="text" className="form-control" {...register("price", { required: true })} />
                {errors.price && <span>This field is required</span>}
                <label htmlFor="quantity">Quantity</label>
                <input type="text" className="form-control" {...register("quantity", { required: true })} />
                {errors.quantity && <span>This field is required</span>}
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" {...register("description", { required: true })} />
                {errors.description && <span>This field is required</span>}
                <label htmlFor="discountedPrice">Discounted Price</label>
                <input type="text" className="form-control" {...register("discountedPrice", { required: true })} />
                {errors.discountedPrice && <span>This field is required</span>}
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
  );
};
