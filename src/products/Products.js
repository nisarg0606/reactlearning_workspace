import React from "react";
import { ProductList } from "./ProductList";

export const Products = () => {
    var products = [
        {
            _id: 1,
            name: "Laptop",
            price: 50000,
            quantity: 10,
            // description must be min 20 characters long
            description: "This is a good laptop, with 8GB RAM and 1TB Hard Disk",
            discountedPrice: 45000,
        },
        {
            _id: 2,
            name: "Mobile",
            price: 20000,
            quantity: 20,
            description: "Mobile with 4GB RAM and 64GB Internal Memory",
            discountedPrice: 18000,
        },
        {
            _id: 3,
            name: "TV",
            price: 30000,
            quantity: 30,
            description: "Smart TV with 4K Resolution",
            discountedPrice: 27000,
        },
    ];

    const [productData, setProductData] = React.useState(products);

    function deleteProduct(_id) {
        var newProducts = productData.filter((product) => product._id !== _id);
        setProductData(newProducts);
    }

    function editProduct(product) {
        console.log(product);
        debugger;
        var newProducts = productData.map((p) => {
            if (p._id === product._id) {
                return product;
            }
            return p;
        }
        );
        setProductData(newProducts);
    }

    function addProduct(product) {
        console.log(product);
        debugger;
        var productData_length = productData.length;
        console.log(productData_length);
        // product.id = Number(productData_length) + 1;
        // if discounted price is greater than price, then throw an error
        if (Number(product.discountedPrice) > Number(product.price)) {
            alert("Discounted price cannot be greater than price");
            return;
        }
        // quantity should not be greater than 100
        if (Number(product.quantity) > 100) {
            alert("Quantity cannot be greater than 100");
            return;
        }
        if(product.description.length < 20){
            alert("Description must be atleast 20 characters long");
            return;
        }
        var newProducts = [...productData, product];
        setProductData(newProducts);
    }
    return (
        <div>
            <ProductList products={productData} deleteProduct={deleteProduct}  editProduct={editProduct} addProduct={addProduct}/>
        </div>
    );
};