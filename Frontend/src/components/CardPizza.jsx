import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPizzaSlice } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de pizza
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { capitalizarPrimeraLetra } from "../utils/mayuscula";
import { formatearNumeroConMiles } from "../utils/format";

const CardPizza = ({ pizza }) => {
  return (
    <div className="Bloque_de_cada_pizza" key={pizza.id}>
      <Card style={{ width: "80%" }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title className="Titulo_card">
            {capitalizarPrimeraLetra(pizza.name)}
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="Inrgedientes_text">
              <FontAwesomeIcon
                icon={faPizzaSlice}
                style={{
                  marginRight: "5px",
                  color: "rgb(82, 26, 17)",
                  fontSize: "20px",
                }}
              />{" "}
              Ingredientes:
            </ListGroup.Item>

            <ListGroup.Item className="Inrgedientes_text2">
              {
                <ul>
                  {pizza.ingredients.map((ingredients, id) => (
                    <li key={id}>{ingredients}</li>
                  ))}
                </ul>
              }
            </ListGroup.Item>
            <ListGroup.Item className="Precio_card">
              Precio: ${formatearNumeroConMiles(pizza.price)}
            </ListGroup.Item>
          </ListGroup>

          <div className="botones_card">
            <Button className="boton_compra1" variant="primary">
              Ver Más
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  marginLeft: "5px",
                  color: "rgb(33, 37, 41)",
                }}
              />
            </Button>
            <Button
              className="boton_compra2"
              variant="primary"
              style={{ marginLeft: "1px" }}
            >
              Añadir
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ marginLeft: "5px", color: "white" }}
              />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardPizza;
