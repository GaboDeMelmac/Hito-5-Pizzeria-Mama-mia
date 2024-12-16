import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [clave, setClave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("capture el click");
    console.log(clave.length);
    // Validaciones
    if (email == "" || clave == "") {
      alert("Favor intoducir su clave");
    } else if (clave.length < 6) {
      alert("Favor ingresar su clave con más de 6 digitos");
    } else {
      alert("Usted se a logeado con exito, Bienvenido!");
    }
  };

  return (
    <>
      <div className="Formulario_login">
        <div>
          <h2>Login</h2>
        </div>
        <Form
        // style={{ backgroundColor: color }}
        >
          <Form.Group
            className="mb-3 d-flex flex-column"
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <input
              type="email"
              placeholder="Ingresar email"
              onChange={(eve) =>
                // console.log(eve.target.value)
                SetEmail(eve.target.value)
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex flex-column"
            controlId="formBasicPassword"
          >
            <Form.Label>Contraseña</Form.Label>
            <input
              type="password"
              placeholder="Ingresar password"
              onChange={(eve) =>
                // console.log(eve.target.value)
                setClave(eve.target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
