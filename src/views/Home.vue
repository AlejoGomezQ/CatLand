<template>
  <div class="home">
    <Loader v-show="isLoading" />
    <div class="main" v-show="!isLoading">
      <h1 class="title text-center">Gatitos para adoptar</h1>
      <section class="row m-4">
        <div
          class="col-12 col-sm-6 col-lg-3 d-flex justify-content-around"
          v-for="(c, index) in cats"
          :key="index"
        >
          <CatCard>
            <template slot="catPhoto">
              <img :src="c.url" alt="" />
            </template>
            <template slot="btnAdopted">
              <button class="btn" @click.prevent="addToAdopted(c.id)">
                Adoptar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  />
                </svg>
              </button>
            </template>
          </CatCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
//Librerias
import axios from "axios";

import CAT_API from "@/services/catApi";

//Componentes
import Loader from "@/components/general/Loader";
import CatCard from "@/components/CatCard";

export default {
  name: "Home",

  components: {
    Loader,
    CatCard,
  },

  data() {
    return {
      cats: {},
      isLoading: false,
    };
  },

  created() {
    this.isLoading = true;
    axios
      .get(`${CAT_API.BASE_URL}images/search?limit=40&${CAT_API.API_KEY}`)
      .then((res) => {
        this.cats = res.data;
        this.isLoading = false;
      })
      .catch((err) => console.error(err));
  },

  methods: {
    addToAdopted(id) {
      axios
        .post(`${CAT_API.BASE_URL}favourites?${CAT_API.API_KEY}`, {
          image_id: id,
        })
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped>
.btn {
  border: 1px solid #00c994;
  color: #00c994;
  background: #ffffff;
}

.btn:hover {
  background: #00c994;
  color: #000000;
}
</style>
