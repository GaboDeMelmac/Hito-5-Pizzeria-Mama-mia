import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Profile = () => {
  return (
    <div>
      <div className="Formulario_login">
        <div>
          <h2>Profile</h2>
        </div>
        <Form
        // style={{ backgroundColor: color }}
        >
          <Form.Group
            className="mb-3 d-flex flex-column"
            controlId="formBasicEmail"
          >
            <Form.Label>Email: gabrielcarrasco1494@gmail.com</Form.Label>

            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex flex-column"
            controlId="formBasicPassword"
          >
            <Form.Label>Contraseña: ********** </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <Button variant="primary" type="submit">
            cerrar sesión
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
