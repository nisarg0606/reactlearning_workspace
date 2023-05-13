import React from "react";
import { Link } from "react-router-dom";

export const ProductList = (props) => {
    return (
        <div>
            <h1>PRODUCT LIST</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">PRODUCT ID</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">PRODUCT PRICE</th>
                        <th scope="col">PRODUCT QUANTITY</th>
                        <th scope="col">DESCRIPTION </th>
                        <th scope="col">DISCOUNTED PRICE</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((p) => {
                        return (
                            <tr>
                                <th scope="row">{p._id}</th>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.quantity}</td>
                                <td>{p.description}</td>
                                <td>{p.discountedPrice}</td>
                                <td>
                                    <button onClick={() => { props.deleteProduct(p.id) }} className="btn btn-danger">DELETE</button>
                                    <Link to={`/editproduct/${p.id}`}><button className="btn btn-primary">EDIT</button></Link>    
                                </td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
            <form>
                <div>
                    <label>Product ID</label>
                    <input type="number"  name="id" />
                    <br />
                    <label>Product Name</label>
                    <input type="text"  name="name" />
                    <br />
                    <label>Product Price</label>
                    <input type="number"  name="price" />
                    <br />
                    <label>Product Quantity</label>
                    <input type="number"  name="quantity" />
                    <br />
                    <label>Product Description</label>
                    <input type="text"  name="description" />
                    <br />
                    <label>Product Discounted Price</label>
                    <input type="number"  name="discountedPrice" />
                    <br />
                    <button className="btn btn-success" onClick={props.addProduct}>ADD PRODUCT</button>
                </div>
            </form>
        </div>
    );
};