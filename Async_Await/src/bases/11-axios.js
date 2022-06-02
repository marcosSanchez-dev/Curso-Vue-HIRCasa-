import axios from "axios";

const apiKey = "GiCzPBl7CWOMBbJq3AT7fZftmMO9MTRr";

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs", //La URL base que no cambia en cada imagen
  params: {
    api_key: apiKey, //escribir el parametro tal cual lo requiere la API
  },
});

export default giphyApi;
