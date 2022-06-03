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
      number: 10,
    };
  },

  methods: {
    printConsole(event) {
      console.log("Apretaste el BOTON");
      this.number = Math.floor(Math.random() * 9); // THIS referencía al objeto createAPP
      // console.log(event);
      this.mayusculas();
    },
    mayusculas() {
      this.quote = this.quote.toUpperCase();
    },
  },
});

app.mount("#myApp");
