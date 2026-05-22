import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Ez a digikvíz program</h2>
      <button onClick={() => navigate("/kviz/1")}>1-es feladatsor</button>
      <button onClick={() => navigate("/kviz/2")}>2-es feladatsor</button>
      <button onClick={() => navigate("/kviz/3")}>3-as feladatsor</button>
    </div>
  );
};

export default Home;
