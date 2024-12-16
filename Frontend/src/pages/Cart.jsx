import { pizzas, pizzaCart } from "../data/pizzas.js";
import { formatearNumeroConMiles } from "../utils/format.js";
import React from "react";
import { useState } from "react";

const Cart = () => {
  const [pizzasCarrito, setPizzasCarrito] = useState(pizzaCart);

  const handleAgregar = (index) => {
    pizzasCarrito[index].count++;
    setPizzasCarrito([...pizzasCarrito]);
  };

  const handleQuitar = (index) => {
    pizzasCarrito[index].count--;
    setPizzasCarrito([...pizzasCarrito.filter((pizza) => pizza.count > 0)]);
  };

  const calcularTotal = pizzasCarrito.reduce((total, pizza) => {
    return total + pizza.price * pizza.count;
  }, 0);

  console.log(calcularTotal);
  return (
    <div className="Cart">
      <h3>Detalles del pedido:</h3>
      {pizzasCarrito.map((pizza, index) => {
        return (
          <div className="dd-flex" key={index}>
            <img src={pizza.img} width={90} alt="" />
            <div className="Inrgedientes_text3">{pizza.name}</div>
            <p className="Precio_card">
              ${formatearNumeroConMiles(pizza.price)}
            </p>
            <button
              className="boton_cart_plus"
              onClick={() => handleAgregar(index)}
            >
              +
            </button>
            <p>{pizza.count}</p>

            <button
              className="boton_cart_minus"
              onClick={() => handleQuitar(index)}
            >
              -
            </button>
          </div>
        );
      })}
      <div>
        <div>
          <h2>Total: ${formatearNumeroConMiles(calcularTotal)}</h2>
        </div>
        <button className="Boton_pagar">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
