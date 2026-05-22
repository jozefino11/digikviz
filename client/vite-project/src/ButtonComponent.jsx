import { useState } from "react";
import CheckComponent from "./CheckComponent";

const ButtonComponent = ({ id, answer, touched, idx, reRender, taskList }) => {
  const [checkMessage, setCheckMessage] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/kviz`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          userAnswer: answer,
          taskList: taskList,
        }),
      });

      const data = await response.json();
      setCheckMessage(data.message);
      reRender(idx);
    } catch (err) {
      console.error("Hiba:", err);
    }
  };

  return (
    <div className="buttonAndCheck">
      <button
        disabled={touched}
        onClick={() => handleButtonClick()}
        className="kvizButton"
      >
        {answer}
      </button>
      <CheckComponent checkMessage={checkMessage} />
    </div>
  );
};

export default ButtonComponent;
