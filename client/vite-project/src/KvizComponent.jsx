import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormComponent from "./FormComponent";

import { useNavigate } from "react-router-dom";
import { fetchKvizData } from "./hooks/api";
import { calculatePoints } from "./hooks/calculatePoints";

const KvizComponent = () => {
  const [kvizData, setKvizData] = useState([]);
  const [points, setPoints] = useState(0);

  let params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchKviz = async () => {
      try {
        const tempDatas = await fetchKvizData(params.id);
        setKvizData(tempDatas);
      } catch (err) {
        console.error("Hiba a kvíz betöltésekor: ", err);
      }
    };

    fetchKviz();
  }, [params.id]);

  const reRender = (idx) => {
    const tempData = kvizData.map((data) => {
      console.log("A data: ", data);
      return data.id === idx
        ? {
            ...data,
            touched: true,
          }
        : data;
    });

    setKvizData(tempData);
  };

  const getPoints = () => {
    calculatePoints(setPoints);
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000);

    return () => clearTimeout(timer);
  };

  return (
    <>
      <div>
        {kvizData.map((data) => {
          return (
            <FormComponent key={data.id} data={data} reRender={reRender} />
          );
        })}
      </div>
      <div>
        <button onClick={getPoints}>Mutast a pontszámot!</button>
        Elért pontszám: {points} pont.
      </div>
    </>
  );
};

export default KvizComponent;
