// console.log(Vue);

const app = Vue.createApp({
  // template: `
  //       <h1>Hola mundo</h1>
  //       <p>primer App en vue</p>
  //   `,

  data() {
    return {
      message: "Hola mundo desde la funcion DATA",
      quote: "Ser o no ser",
      author: "platon",
    };
  },
});

app.mount("#myApp");
