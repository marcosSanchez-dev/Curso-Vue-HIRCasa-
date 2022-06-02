import { getHeroById } from "./bases/08-imp-exp";

/*
console.log("Inicio");

new Promise((resolve, reject) => {
  console.log("cuerpo de la promesa");
  //   resolve("promesa resuelta");
  reject("hay un error");
})
  .then((msg) => console.log(msg))
  .catch(console.log); // Nueva sintaxis

// Si quieres que una funcion reciba un argumento de otra funcion para despues usarlo, puedes escribirla de esta forma

console.log("Fin");
*/

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      if (hero) {
        resolve(hero);
      } else {
        reject("No existe ese HEROE");
      }
    }, 1000);
  });
};

getHeroByIdAsync(2)
  .then((h) => console.log(`El heroe es ${h.name}`))
  .catch(console.log);
