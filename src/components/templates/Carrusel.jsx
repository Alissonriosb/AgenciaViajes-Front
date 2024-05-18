const Carrusel = () => {
  return (
    <section className="my-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ maxHeight: "70vh" }}>
          <div className="carousel-item active">
            <img
              src="https://www.momondo.es/discover/wp-content/uploads/sites/242/2020/08/dest_thailand_krabi-region_ko-phi-phi_maya-bay_boat-traffic-on-a-holiday_gettyimages-901609064_universal_within-usage-period_56529-1640x1312.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ objectFit: "cover", height: "70vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Hay todo un mundo por explorar</h5>
              <p>paisajes inolvidables.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.revistaad.es/photos/61eac5eab1c878ef07447154/16:9/w_2560%2Cc_limit/52235738"
              className="d-block w-100"
              alt="Slide 2"
              style={{ objectFit: "cover", height: "70vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Comienza tu aventura</h5>
              <p>Explora lo desconocido.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg"
              className="d-block w-100"
              alt="Slide 3"
              style={{ objectFit: "cover", height: "70vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Viajar, es la mejor terapia.</h5>
              <p>Vive lo que nunca has vivido.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carrusel;
