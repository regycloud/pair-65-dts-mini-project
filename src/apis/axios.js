import axios from "axios";

const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a152302fef97e3c7c20de9d4503c0e14",
  },
});

export default tmdbInstance;
