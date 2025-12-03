import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";

export const getContactsList = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};

export const addContact = async (payload) => {
  const response = await axios.post("/contacts", payload);
  return response.data;
};

export const getSingleContact = async (id) => {
  const response = await axios.get(`/contacts/${id}`);
  return response.data;
};
