const ContactUs = () => {
  return (
    <section className="container my-5" id="contact">
      <h2 className="text-center mb-5">Contáctanos</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
