export const fetchBrawlers = async () => {
  const response = await fetch(`/brawlers`);
  const data = await response.json();
  return data;
};

export const createBrawler = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = fetch("/brawlers", requestOptions);
  const data = await response.json();
  return data;
};
