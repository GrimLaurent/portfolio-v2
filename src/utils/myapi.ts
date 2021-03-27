import axios from "axios";

export default axios.create({
  baseURL: "http://51.75.202.45:8080/",
  headers: {
    "Content-type": "application/json",
  },
});
