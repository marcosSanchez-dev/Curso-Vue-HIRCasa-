import axios from "axios";

const apiKey = "GiCzPBl7CWOMBbJq3AT7fZftmMO9MTRr";

//https://api.giphy.com/v1/gifs/trending?api_key=${apiKey} ----> URL generica y ejemplo

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs", //La URL base que no cambia en cada imagen
  params: {
    api_key: apiKey, //escribir el parametro tal cual lo requiere la API
  },
});

giphyApi
  .get("/trending") //lo que cambia de cada URL, esta funcion devuelve una Promesa
  .then(({ data }) => {
    // console.log(data.data[Math.floor(Math.random() * 50)]);

    const { url } = data.data[Math.floor(Math.random() * 50)].images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.log); //en caso de error
