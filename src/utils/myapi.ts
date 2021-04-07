import axios from "axios";

export default axios.create({
  //baseURL: "http://51.75.202.45:27017/",
  baseURL: "http://51.75.202.45:3001/",
  headers: {
    "Content-type": "application/json",
  },
});
