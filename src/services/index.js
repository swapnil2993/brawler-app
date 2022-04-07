export const fetchBrawlers = async () => {
  const response = await fetch(`/brawlers`);
  const data = await response.json();
  return data;
};

export const createBrawler = async (reqData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqData),
  };

  const response = await fetch("/brawlers", requestOptions);
  const data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  }
  return data;
};

export const deleteBrawler = async (id) => {
  const response = await fetch(`/brawlers/${id}`, { method: "DELETE" });
  const data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  }
  return data;
};


export const updateBrawler = async (id, reqData) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqData),
  };

  const response = await fetch(`/brawlers/${id}`, requestOptions);
  const data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  }
  return data;
};

export const fetchBrawlerDetails = async (id) => {
  const response = await fetch(`/brawlers/${id}`);
  const data = await response.json();
  return data.data;
};
