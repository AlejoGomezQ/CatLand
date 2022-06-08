<template>
  <div class="card mb-4">
    <slot name="catPhoto"></slot>
    <div class="card-body">
      <h3 class="card-title">Gatito</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ut a
        ratione voluptatem id soluta deleniti tempora delectus quia aspernatur
        placeat eius, nemo nam unde, perspiciatis recusandae ipsa repellendus
        ipsam!
      </p>
      <button class="btn" @click.prevent="addToAdopted">
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
    </div>
  </div>
</template>

<script>
//Librerias
import axios from "axios";

import CAT_API from "@/services/catApi";

export default {
  name: "CatCard",

  props: {
    cat: {
      type: Object,
      required: true,
    },
    adoptedCat: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addToAdopted() {
      axios
        .post(`${CAT_API.BASE_URL}favourites?${CAT_API.API_KEY}`, {
          image_id: this.cat.id,
        })
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped>
.card {
  background: #5dffd431;
}

img {
  width: 300px;
  height: 300px;
  display: block;
  margin: auto;
  margin-top: 17px;
}

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
