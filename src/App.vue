<template>
  <div id="app">
    <CatLandHeader />
    <router-view />
    <CatLandFooter />
  </div>
</template>

<script>
import CatLandHeader from "@/components/general/CatLandHeader";
import CatLandFooter from "@/components/general/CatLandFooter";

export default {
  name: "App",

  components: {
    CatLandHeader,
    CatLandFooter,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #eeeeee;
}
</style>
