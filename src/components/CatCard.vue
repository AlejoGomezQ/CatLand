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
      <slot name="btnAdopted"></slot>
      <slot name="delete"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatCard",
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
</style>
