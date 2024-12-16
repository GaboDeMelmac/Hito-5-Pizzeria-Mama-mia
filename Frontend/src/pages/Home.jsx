import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "../assets/CSS/styles.css";
// import { pizzas } from "../data/pizzas.js";
import { useState, useEffect } from "react";
import "../assets/CSS/styles.css";
import React from "react";

const Home = () => {
  // guarda los datos traidos de la API[
  const [info, setInfo] = useState([]);
  // const [pizzasMenu, setPizasMenu] = useState(pizzas);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="Home_page">
        {info.map((pizza, id) => {
          return <CardPizza key={pizza.id} pizza={pizza}></CardPizza>;
        })}
      </div>
    </>
  );
};

export default Home;
