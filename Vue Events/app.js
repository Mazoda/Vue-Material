const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 1,
    };
  },
  methods: {
    add() {
      this.counter += this.number;
    },
    sub() {
      this.counter -= this.number;
    },
  },
});

app.mount("#events");
