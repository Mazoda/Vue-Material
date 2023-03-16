const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 0,
      name: "",
      confirmedNameS: "",
    };
  },
  methods: {
    add() {
      this.counter += this.number;
    },
    sub() {
      this.counter -= this.number;
    },
    clear() {
      this.counter = 0;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmedName() {
      this.confirmedNameS = this.name;
    },
  },
});

app.mount("#events");
