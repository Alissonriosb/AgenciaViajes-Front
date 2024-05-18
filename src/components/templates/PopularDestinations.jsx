const PopularDestinations = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Destinos Populares</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://s3.pagegear.co/400/catalogo_experiencias/etiquetas/36/planes/42/foto_principal_1800x700.jpg?1580489"
                className="card-img-top"
                alt="Destination 1"
              />
              <div className="card-body">
                <h5 className="card-title">San Andrés Islas</h5>
                <p className="card-text">
                  Descubre el mar de los siete colores
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://cdn.vallarta-adventures.com/sites/default/files/2019-01/cancun-about-weather%20%281%29.jpg"
                className="card-img-top"
                alt="Destination 2"
              />
              <div className="card-body">
                <h5 className="card-title">Cancún</h5>
                <p className="card-text">
                  Con su hermoso mar de aguas cristalinas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://res.cloudinary.com/lastminute-contenthub/s--BzOJUV1q--/c_crop,h_3840,w_5760,x_0,y_0/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Americas/Dominican%20Republic/shutterstock_270486656"
                className="card-img-top"
                alt="Destination 3"
              />
              <div className="card-body">
                <h5 className="card-title">Punta Cana.</h5>
                <p className="card-text">
                  Con todo el sabor de República Dominicana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
