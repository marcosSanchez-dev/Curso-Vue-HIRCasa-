<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ elevarAlCuadrado }}</p>

  <div>
    <button @click="increase">+1</button>
    <!-- v-on:click es lo mimsmo que poner @click -->
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "Contador", //nombras al componente
  data() {
    //crea propiedades reactivas para trabajar en el documento
    return {
      counter: 5,
    };
  },
  computed: {
    //realiza la opracion una vez hasta que los valores son cambiados
    elevarAlCuadrado() {
      console.log("hice una operacion computada");
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Contador"; //Accedes a una propiedad por medio del THIS
    },
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
};
</script>

<style>
button {
  background-color: #64d687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
