const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 1,
      name: "",
    };
  },
  methods: {
    add() {
      this.counter += this.number;
    },
    sub() {
      this.counter -= this.number;
    },
    clear(){
      this.counter=0;
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
