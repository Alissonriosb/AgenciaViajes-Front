import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FixedButton from "../UI/FixedButton";

const BookForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    destino: "",
    fechaReserva: "",
    cantidadDias: "",
    numeroPersonas: "",
    username: "",
    password: "",
    nombreCompleto: "",
    correo: "",
    telefono: "",
    repetirPassword: "",
  });
  const [precioFinal, setPrecioFinal] = useState(0);

  const destinosPrecios = {
    Cancún: 100,
    "San Andrés Islas": 80,
    "Punta Cana": 120,
    Cartagena: 90,
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const { cantidadDias, numeroPersonas, destino } = formData;
    if (cantidadDias && numeroPersonas && destino) {
      const precioDestino = destinosPrecios[destino] || 0;
      const precioCalculado = cantidadDias * numeroPersonas * precioDestino;
      setPrecioFinal(precioCalculado);
      //Aquí va el envío del formulario para crear una reserva
    }
    setShowLogin(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //Aquí va el envío del formulario de inicio de sesión
    console.log("Inicio de sesión", formData);
    handleCloseModal();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Aquí va el envío del formulario de registro de un usuario nuevo
    console.log("Registro", formData);
    handleCloseModal();
  };

  return (
    <>
      <FixedButton onClick={handleShowModal} />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {showLogin
              ? isRegistering
                ? "Registrarse"
                : "Iniciar Sesión"
              : "Registrar Reserva"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!showLogin ? (
            <Form onSubmit={handleBookingSubmit}>
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

              <Form.Group controlId="formPrecioFinal">
                <Form.Label>Valor aproximado de reserva</Form.Label>
                <h5>${precioFinal}</h5>
              </Form.Group>

              <Button variant="primary" type="submit">
                Iniciar sesión para confirmar reserva
              </Button>
            </Form>
          ) : (
            <Form
              onSubmit={
                isRegistering ? handleRegisterSubmit : handleLoginSubmit
              }
            >
              {isRegistering && (
                <>
                  <Form.Group controlId="formNombreCompleto">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre completo"
                      name="nombreCompleto"
                      value={formData.nombreCompleto}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formCorreo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </>
              )}

              <Form.Group controlId="formUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su usuario"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {isRegistering && (
                <Form.Group controlId="formRepetirPassword">
                  <Form.Label>Repetir Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repita su contraseña"
                    name="repetirPassword"
                    value={formData.repetirPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              )}

              <Button variant="primary" type="submit">
                {isRegistering ? "Registrarse" : "Iniciar Sesión"}
              </Button>

              <Button
                variant="link"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering
                  ? "¿Ya tienes una cuenta? Inicia sesión"
                  : "¿No tienes una cuenta? Regístrate"}
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookForm;
