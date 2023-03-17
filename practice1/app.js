const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet!";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    //its name is the same as the computed result so it listens to its value when it changes
    result(value) {
      // reset the value of the number if it matches 37, after 5 seconds
      if (value >= 37) {
        setTimeout(() => {
          this.number = 0;
        }, 5000);
      }
    },
  },
  methods: {
    add(value) {
      this.number += value;
    },
  },
});
app.mount("#parent");
