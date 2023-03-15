const app = Vue.createApp({
  data() {
    return {
      firstOutput: "",
      secOutput: "",
    };
  },
  methods: {
    showalert() {
    alert("Meow");
    },
    firstupdated(event) {
      this.firstOutput = event.target.value;
    },
    secUpdated(event) {
      this.secOutput = event.target.value;
    },
  },
});
app.mount("#Events");
