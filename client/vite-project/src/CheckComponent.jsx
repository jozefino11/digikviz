const CheckComponent = ({ checkMessage }) => {
  console.log("A checkMessage: ", checkMessage);
  return (
    <div>
      {checkMessage === "Jó válasz" ? (
        <img
          src="../public/check-icon.png"
          id="check-icon"
          id="check-icon"
          style={{ display: "block" }}
        />
      ) : null}
      {checkMessage === "Rossz válasz" ? (
        <img
          src="../public/incorrect-icon.png"
          id="incorrect-icon"
          id="incorrect-icon"
          style={{ display: "block" }}
        />
      ) : null}
    </div>
  );
};

export default CheckComponent;
