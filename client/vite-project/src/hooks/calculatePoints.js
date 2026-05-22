export const calculatePoints = async (setPoints) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/points`);
  const data = await response.json();
  setPoints(data.points);
};
