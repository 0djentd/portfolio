<script lang="ts">
import { RouterLink } from "vue-router";
import AppLanguageSwitcher from "./AppLanguageSwitcher.vue";
export default {
  data() {
    return {
      links: [
        { url: "/", name: "Home" },
        { url: "/projects", name: "Projects" },
        { url: "/contacts", name: "Contacts" },
        { url: "/about", name: "About this website" },
      ],
    };
  },
  components: { RouterLink, AppLanguageSwitcher },
};
</script>
<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <RouterLink to="/" class="router-link">
        <a class="navbar-brand" href="#">{{ $t("welcome.name") }}</a>
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
            <RouterLink :to="link.url" class="router-link">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
        <AppLanguageSwitcher class="navbar-lang" />
        <a class="btn btn-outline-info" href="https://github.com/0djentd"
          >GitHub</a
        >
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  margin-bottom: 20px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
}
.router-link {
  text-decoration: none;
  color: lightgray;
  margin: 0 4px;
}
.navbar-lang {
  color: gray;
  margin-right: 8px;
}
</style>
