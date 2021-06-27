import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Vftw1baaajE7p8cg9vE-xGSYAQkMZkH0fjbH5VMdY_k",
  },
});
