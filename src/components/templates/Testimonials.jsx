const Testimonials = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Testimonios</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    ¡La mejor experiencia de mi vida! El viaje estuvo
                    perfectamente organizado.
                  </p>
                  <footer className="blockquote-footer">
                    María García
                    <div className="text-warning mt-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    Un servicio excepcional y destinos impresionantes. ¡Muy
                    recomendado!
                  </p>
                  <footer className="blockquote-footer">
                    Juan Pérez
                    <div className="text-warning mt-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    Todo fue de acuerdo al plan y sin contratiempos. ¡Gracias
                    por todo!
                  </p>
                  <footer className="blockquote-footer">
                    Ana Rodríguez
                    <div className="text-warning mt-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
