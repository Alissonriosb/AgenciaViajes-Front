import Carrusel from "../templates/Carrusel";
import Header from "../templates/Header";
import AboutUs from "../templates/AboutUs";
import PopularDestinations from "../templates/PopularDestinations";
import Testimonials from "../templates/Testimonials";
import OurServices from "../templates/OurServices";
import CallToActionButton from "../templates/CallToActionButton";
import ContactUs from "../templates/ContactUs";
import Footer from "../templates/Footer";
import BookForm from "../templates/BookForm";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Carrusel de imágenes */}
      <Carrusel />

      {/* Sección de destinos populares */}
      <PopularDestinations />

      {/* Sección de testimonios */}
      <Testimonials />

      {/* Sección nuestros servicios */}
      <OurServices />

      {/* Sección de introducción */}
      <AboutUs />

      {/* Botón call to action */}
      <CallToActionButton />

      {/* Sección de contáctanos */}
      <ContactUs />

      <BookForm/>

      <Footer />
    </div>
  );
};

export default Home;
