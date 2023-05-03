import axios from "axios";

let apiHandle = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

let Get = (endpoint) => {
  return apiHandle.get(endpoint);
};
let GetById = (endpoint, id) => {
  return apiHandle.get(`${endpoint}/${id}`);
};
let Post = (endpoint, body) => {
  return apiHandle.post(endpoint, body);
};
let Put = (endpoint, id, body) => {
  return apiHandle.put(`${endpoint}/${id}`, body);
};
let Del = (endpoint, id) => {
  return apiHandle.delete(`${endpoint}/${id}`);
};

export { Get, GetById, Post, Put, Del };
