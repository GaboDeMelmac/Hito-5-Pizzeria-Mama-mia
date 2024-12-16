import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faUser,
  faLock,
  faUnlock,
  faRightFromBracket,
  faRightToBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatearNumeroConMiles } from "../utils/format";

const Fn_Navbar = () => {
  const total = 19190;
  const token = false;

  return (
    <div className="Navbar">
      <Navbar bg="dark" data-bs-theme="white" className="d-flex">
        <Container className="d-flex w-100">
          <Navbar.Brand className="texto_brand text-white">
            <h4>
              <Link
                to="/Hito-5-Pizzeria-Mama-mia"
                className="text-white ms-3 text-decoration-none"
              >
                ¡Pizzería Mamma Mia!
              </Link>
            </h4>
          </Navbar.Brand>
          <Nav className=" d-flex">
            <button
              type="button"
              className=" ms-auto boton_esatdo_home btn btn-primary"
            >
              <FontAwesomeIcon
                icon={faPizzaSlice}
                style={{ marginRight: "5px", color: "yellow" }}
              />
              <Link
                to="/Hito-5-Pizzeria-Mama-mia"
                className="text-white text-decoration-none"
              >
                Home
              </Link>
            </button>
            <button
              type="button"
              className={token ? "boton_esatdo btn btn-primary" : "d-none"}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
              <Link to="/profile" className="text-white text-decoration-none">
                Profile
              </Link>
            </button>
            <button
              type="button"
              className={token ? "boton_esatdo btn btn-primary" : "d-none"}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                style={{ marginRight: "5px" }}
              />{" "}
              Logout
            </button>
            <button
              type="button"
              className={token ? "d-none" : "boton_esatdo btn btn-primary"}
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ marginRight: "5px" }}
              />{" "}
              <Link to="/login" className="text-white text-decoration-none">
                Login
              </Link>
            </button>
            <button
              type="button"
              className={token ? "d-none" : "boton_esatdo btn btn-primary"}
            >
              <FontAwesomeIcon icon={faUnlock} style={{ marginRight: "5px" }} />
              <Link to="/register" className="text-white text-decoration-none">
                Register
              </Link>
            </button>
          </Nav>
          <Nav className="d-flex ms-auto">
            <button type="button" className=" boton_total btn btn-primary ">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ marginRight: "5px" }}
              />
              <Link
                to="/cart"
                className="boton_tot_color  text-decoration-none"
              >
                Total: ${formatearNumeroConMiles(total)}
              </Link>
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Fn_Navbar;
