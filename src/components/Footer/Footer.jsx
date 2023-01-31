import React from "react";
import styles from "./Footer.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Contacto</h2>
      <div className={styles.containerForm}>
        <Form className={styles.form}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Dejanos un comentario</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Comentario..." />
          </Form.Group>
          <Button variant="outline-secondary">Enviar</Button>
        </Form>
      </div>
    </div>
  );
}
