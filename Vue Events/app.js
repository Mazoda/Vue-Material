const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 0,
      name: "",
      // confirmedNameS: "",
      fullname: "",
    };
  },
  /*
  Watch method excutes whenever the name value changes so the fullname also changes
  but the computed properties change when dependences change not only the name.

   */
  watch: {
    name(newValue) {
      if (newValue === "") {
        this.fullname = "";
      } else {
        this.fullname = newValue + " Mutlak";
      }
    },
  },
  computed: {},
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
