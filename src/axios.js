import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-a0c9e.cloudfunctions.net/api",
  //baseURL: "http://127.0.0.1:5001/clone-a0c9e/us-central1/api",
});

export default instance;
