const OurServices = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5">Nuestros Servicios</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <i className="bi bi-geo-alt-fill display-4 mb-3"></i>
          <h4>Asesoramiento Personalizado</h4>
          <p>
            Te ayudamos a planificar el viaje perfecto según tus preferencias.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-calendar-event-fill display-4 mb-3"></i>
          <h4>Paquetes Turísticos</h4>
          <p>
            Ofrecemos una variedad de paquetes turísticos adaptados a tus
            necesidades.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-person-check-fill display-4 mb-3"></i>
          <h4>Soporte 24/7</h4>
          <p>
            Nuestro equipo de soporte está disponible en todo momento para
            asistirte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
