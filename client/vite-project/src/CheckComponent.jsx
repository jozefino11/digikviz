const CheckComponent = ({ checkMessage }) => {
  
  return (
    <div>
      {checkMessage === "Jó válasz" ? (
        <img
          src="/check-icon.png"
          id="check-icon"
          style={{ display: "block" }}
        />
      ) : null}
      {checkMessage === "Rossz válasz" ? (
        <img
          src="/incorrect-icon.png"
          id="incorrect-icon"
          style={{ display: "block" }}
        />
      ) : null}
    </div>
  );
};

export default CheckComponent;
