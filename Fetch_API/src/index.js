const apiKey = "GiCzPBl7CWOMBbJq3AT7fZftmMO9MTRr";

fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data[Math.floor(Math.random() * 40)].images.original;
    console.log(url);

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  });
