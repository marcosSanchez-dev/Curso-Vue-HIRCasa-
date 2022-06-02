const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("****  (Resolve) Promesa await --> Ejecuta el resto de la funcion *****");
      reject(
        "****  (Reject) Promesa await --> Se deja de ejecutar el código restante  *****"
      );
    }, 1000);
  });
};

const medirTiempoAsync = async () => {
  try {
    console.log("Inicio");

    const respuesta = await miPromesa(); //.then(console.log);
    console.log(respuesta);

    console.log("Fin");

    return "El return (resolve) siempre es mandado a la funcion THEN";
  } catch (error) {
    throw "El THROW (reject) siempre es mandado a la funcion CATCH";
  }
};

medirTiempoAsync().then(console.log).catch(console.log);
