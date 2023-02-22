Vue.createApp({
  data() {
    return {
      Enterdage: "",
      name: "",
      age: "",
      agein: "",
      img: "https://i.pinimg.com/564x/9a/4b/8b/9a4b8b6d4369ef5e5bbc9bc3451de664.jpg",
    };
  },
  methods: {
    FaveNum() {
      const rand = Math.floor(Math.random() * 10);
      return rand;
    },
    addAge() {
      this.age = Enterdage;
      this.agein = Enterdage + 5;
    },
  },
}).mount("#assignment");
