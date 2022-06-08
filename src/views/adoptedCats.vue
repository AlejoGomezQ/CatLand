<template>
  <div class="container">
    <h1 class="title text-center">Gatitos adoptados</h1>
    <section class="row m-4">
      <div
        class="col-12 col-sm-6 col-lg-3 d-flex justify-content-around"
        v-for="(c, index) in adoptedCats"
        :key="index"
      >
        <CatCard :adoptedCat="c">
          <template slot="catPhoto">
            <img :src="c.url" alt="" />
          </template>
        </CatCard>
      </div>
    </section>
  </div>
</template>

<script>
//Librerias
import axios from "axios";

//Services
import CAT_API from "@/services/catApi";

//Components
import CatCard from "@/components/CatCard";

export default {
  name: "AdoptedCats",

  components: {
    CatCard,
  },

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
