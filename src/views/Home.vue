<template>
  <div class="home">
    <h1 class="title text-center">Gatitos para adoptar</h1>
    <section class="row m-4">
      <div
        class="col-12 col-sm-6 col-lg-3 d-flex justify-content-around"
        v-for="(c, index) in cats"
        :key="index"
      >
        <CatCard :cat="c" />
      </div>
    </section>
  </div>
</template>

<script>
//Librerias
import axios from "axios";

import CAT_API from "@/services/catApi";

//Componentes
import CatCard from "@/components/CatCard";

export default {
  name: "Home",

  components: {
    CatCard,
  },

  data() {
    return {
      cats: {},
    };
  },

  created() {
    axios
      .get(`${CAT_API.BASE_URL}images/search?limit=40&${CAT_API.API_KEY}`)
      .then((res) => (this.cats = res.data))
      .catch((err) => console.error(err));
  },
};
</script>
