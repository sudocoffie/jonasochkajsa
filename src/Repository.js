import axios from "axios";

const baseDomain =
  process.env.NODE_ENV === "production"
    ? "https://jandkwedding.herokuapp.com/"
    : "http://localhost:5000/";

const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});
