import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FixedButton from "../UI/FixedButton";

const BookForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    destino: "",
    fechaReserva: "",
    cantidadDias: "",
    numeroPersonas: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
    console.log(formData);
    handleClose();
  };

  return (
    <>
      <FixedButton onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDestino">
              <Form.Label>Destino</Form.Label>
              <Form.Control
                as="select"
                name="destino"
                value={formData.destino}
                onChange={handleChange}
              >
                <option value="">Seleccione un destino</option>
                <option value="Cancún">Cancún</option>
                <option value="San Andrés Islas">San Andrés Islas</option>
                <option value="Punta Cana">Punta Cana</option>
                <option value="Cartagena">Cartagena</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formFechaReserva">
              <Form.Label>Fecha de reserva</Form.Label>
              <Form.Control
                type="date"
                name="fechaReserva"
                value={formData.fechaReserva}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCantidadDias">
              <Form.Label>Cantidad de días</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese la cantidad de días"
                name="cantidadDias"
                value={formData.cantidadDias}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formNumeroPersonas">
              <Form.Label>Número de personas</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el número de personas"
                name="numeroPersonas"
                value={formData.numeroPersonas}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookForm;
