<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  props: ["links"],
  components: [RouterLink],
};
</script>
<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <RouterLink to="/" class="router-link">
        <a class="navbar-brand" href="#">Sergey Shapochkin</a>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item" v-for="link in links" :key="link[0]">
            <RouterLink :to="link[0]" class="router-link">
              {{ link[1] }}
            </RouterLink>
          </li>
        </ul>
        <div class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search projects"
            aria-label="Search projects"
          />
          <button class="btn btn-outline-info" type="submit">>_</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
.navbar {
  margin-bottom: 20px;
}
.router-link {
  text-decoration: none;
  color: lightgray;
  margin: 0 4px;
}
</style>
