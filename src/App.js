import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Users } from "./users/Users";
import { Registration } from "./forms/Registration";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { ListUser } from "./api/users/listUser";
import { EditUser } from "./api/users/EditUser";
import { Products } from "./products/Products";
import { EditProduct } from "./api/products/EditProduct";

function App() {
  var title = "React App";
  return (
    <div className="App">
      {/* { <Header  title ={title}/>} */}
      {/* <Registration/> */}
      {/* <Users /> */}
      {/* <Footer /> */}
      {/* {<Navbar />} */}
      {/* <Route path="/users" component={Users} /> */}
      <Routes>
      <Route path="/listuser" element = {<ListUser/>}></Route>
      <Route path="/edituser/:id" element = {<EditUser/>}></Route>
      <Route path="/products" element = {<Products/>}></Route>
      <Route path="=/editproduct/:id/:name/:price/:quantity/:description/:discountedPrice" element = {<EditProduct/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
