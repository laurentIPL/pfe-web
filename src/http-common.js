import axios from "axios";

export default axios.create({
  baseURL: "https://pfeapi-prod.herokuapp.com/api",
  //baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
