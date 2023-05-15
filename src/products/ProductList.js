import React, { useState } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";

export const ProductList = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [staticProduct, setStaticProduct] = useState({});
    function addProduct(e) {
        e.preventDefault();
        var _id = props.products.length + 1;
        var product = {
            _id: _id,
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            discountedPrice: discountedPrice,
        };
        props.addProduct(product);
    };
    function editProduct(e) {
        // console.log(staticProduct);
        e.preventDefault();
        var product = {
            _id: staticProduct._id,
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            discountedPrice: discountedPrice,
        };
        props.editProduct(product);
    }
    const  onClickEditButton = (e) => {
        console.log(staticProduct);
        e.preventDefault();
        setIsEdit(true);
        setIsClose(false);
    }
    const  onClickCloseButton = (e) => {
        e.preventDefault();
        setIsEdit(false);
        setIsClose(true);
    }
    return (
        <div>
            <h1>PRODUCT LIST</h1>
            <table className="table">
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
                            <tr key={p._id}>
                                <th scope="row">{p._id}</th>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.quantity}</td>
                                <td>{p.description}</td>
                                <td>{p.discountedPrice}</td>
                                <td>
                                    <button onClick={() => { props.deleteProduct(p.id) }} className="btn btn-danger">DELETE</button>
                                    <button onClick={(e) => { onClickEditButton(e); setStaticProduct(p); }} className="btn btn-warning">EDIT</button>
                                </td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
            <form>
                <div>
                    {/* <label>Product ID</label> */}
                    {/* <input type="number"  name="id" /> */}
                    {/* <br /> */}
                    <label>Product Name</label>
                    <input onChange={(e) => { setName(e.target.value) }} type="text" name="name" />
                    <br />
                    <label>Product Price</label>
                    <input onChange={(e) => { setPrice(e.target.value) }} type="number" name="price" />
                    <br />
                    <label>Product Quantity</label>
                    <input onChange={(e) => { setQuantity(e.target.value) }} type="number"  name="quantity" />
                    <br />
                    <label>Product Description</label>
                    <input onChange={(e) => { setDescription(e.target.value) }} type="text"  name="description" />
                    <br />
                    <label>Product Discounted Price</label>
                    <input onChange={(e) => { setDiscountedPrice(e.target.value) }} type="number"  name="discountedPrice" />
                    <br />
                    <button className="btn btn-success" onClick={addProduct}>ADD PRODUCT</button>
                </div>
            </form>
            {
                isEdit ? (
                    // <form>
                    <div>
                        <button className="btn btn-success" onClick={onClickCloseButton}>CLOSE EDIT</button>
                        <div>
                            <label>Product Name</label>
                            <input onChange={(e) => { setName(e.target.value) }} type="text" name="name" value={staticProduct.name} />
                            <br />
                            <label>Product Price</label>
                            <input onChange={(e) => { setPrice(e.target.value) }} type="number" name="price" value={staticProduct.price} />
                            <br />
                            <label>Product Quantity</label>
                            <input onChange={(e) => { setQuantity(e.target.value) }} type="number"  name="quantity" value={staticProduct.quantity} />
                            <br />
                            <label>Product Description</label>
                            <input onChange={(e) => { setDescription(e.target.value) }} type="text"  name="description" value={staticProduct.description} />
                            <br />
                            <label>Product Discounted Price</label>
                            <input onChange={(e) => { setDiscountedPrice(e.target.value) }} type="number"  name="discountedPrice" value={staticProduct.discountedPrice} />
                            <br />
                            <button className="btn btn-success" onClick={editProduct}>EDIT PRODUCT</button>
                        </div>
                    {/* // </form> */}
                    </div>
                ) : null
            }
        </div>
    );
};