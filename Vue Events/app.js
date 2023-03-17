const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  /*
  Watch method excutes whenever the name value changes so the fullName also changes
  but the computed properties change when dependences change not only the name.

   */
  watch: {
    // name(newValue) {
    //   if (newValue === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = newValue + " Mutlak";
    //   }
    // },
  },
  computed: {
    fullnameS() {
      if (this.name === "" || this.lastName === "") {
        return " ";
      }

      return this.name + " " + this.lastName;
    },
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
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
