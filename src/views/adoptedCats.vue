<template>
  <div class="container">
    <h1>Gatitos adoptados</h1>
  </div>
</template>

<script>
//Librerias
import axios from "axios";

import CAT_API from "@/services/catApi";

export default {
  name: "AdoptedCats",

  data() {
    return {
      adoptedCats: {},
    };
  },

  created() {
    axios
      .get(`${CAT_API.BASE_URL}favourites?limit=40&${CAT_API.API_KEY}`)
      .then((res) => (this.adoptedCats = res.data))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped></style>
