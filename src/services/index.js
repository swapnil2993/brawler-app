import axios from "axios";

export const fetchBrawlers = async () => {
  const response = await axios.get(`/api/brawlers`);
  return response.data;
};

export const createBrawler = async (reqData) => {
  const response = await axios.post("/api/brawlers", reqData);
  return response;
};

export const deleteBrawler = async (id) => {
  const response = await axios.delete(`/api/brawlers/${id}`);
  return response.data;
};

export const updateBrawler = async (id, reqData) => {
  const response = await axios.put(`/api/brawlers/${id}`, reqData);
  return response.data;
};

export const fetchBrawlerDetails = async (id) => {
  const response = await axios.get(`/api/brawlers/${id}`);
  return response.data.data;
};
