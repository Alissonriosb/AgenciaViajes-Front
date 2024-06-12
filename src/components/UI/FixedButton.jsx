const FixedButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick 
        
      }
      className="btn btn-primary position-fixed"
      style={{ right: "20px", bottom: "50px" }}
    >
      ¡RESERVA AHORA!
    </button>
  );
};

export default FixedButton;
