import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5241/api",
});

export default client;
