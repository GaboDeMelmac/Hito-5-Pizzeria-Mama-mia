import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Pizza from "./pages/Pizza.jsx";
import Cart from "./pages/Cart.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/CSS/styles.css";
import { pizzas, pizzaCart } from "./data/pizzas.js";
import "./App.css";
import { Profiler, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Pizza Card */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/Hito-5-Pizzeria-Mama-mia" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/pizza/p001" element={<Pizza></Pizza>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/404" element={<NotFound></NotFound>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route></Route>
      </Routes>
      {/* <Pizza></Pizza> */}
      {/*<Cart></Cart> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
