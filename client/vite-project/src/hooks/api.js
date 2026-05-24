import { shuffleArray } from "../utils";

export async function fetchKvizData(paramsId) {
  console.log(import.meta.env.VITE_API_URL);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/datas`, {
    method: "POST",
    body: JSON.stringify({
      taskList: paramsId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error! status: ${response.status}`);
  }

  const data = await response.json();

  let tempData = data?.allData || [];

  tempData = tempData.map((data, id) => {
    data.id = id;
    data.answers = shuffleArray([
      data.correct_answer,
      ...data.incorrect_answers,
    ]);
    data.touched = false;
    return data;
  });

  return tempData;
}
