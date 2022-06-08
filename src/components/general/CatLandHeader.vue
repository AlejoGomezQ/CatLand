<template>
  <header class="">
    <nav class="container navbar justify-content-between">
      <a class="navbar-brand"> CatLand </a>
      <div class="menu">
        <router-link to="/" class="mr-4">Inicio</router-link>
        <router-link to="/adopted-cats" class="mr-4">Adoptados</router-link>
        <router-link to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            /></svg
        ></router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "CatLandHeader",
};
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;
  padding: 10px;
  position: relative;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #00c994;
}

svg {
  vertical-align: baseline;
}

a {
  color: #000000;
}

a:hover {
  text-decoration: none;
  color: #00c994;
}
</style>
