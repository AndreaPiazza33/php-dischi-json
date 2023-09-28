const { createApp } = Vue;

createApp({
  data() {
    return {
      discList: [],
    };
  },
  methods: {
    fetchDiscList() {
      axios
        .get("http://localhost/php-dischi-json/Backend/Api/get-discs.php")
        .then((result) => {
          this.discList = result.data;
          console.log(this.discList);
        });
    },
  },
  mounted() {
    this.fetchDiscList();
  },
}).mount("#app");
