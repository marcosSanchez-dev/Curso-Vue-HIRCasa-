import giphyApi from "./bases/11-axios";

const getImage = async () => {
  try {
    const { data } = (await giphyApi.get("/trending")).data; /*
                                                                Si cierras entre parentesis una accion,
                                                                esta es ejecutada de inmediato y al resultado
                                                                final se le extrae la propiedad especificada
                                                             */
    const { url } = data[Math.floor(Math.random() * 50)].images.original;
    console.log(url);

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    throw error;
  }
};

getImage();
