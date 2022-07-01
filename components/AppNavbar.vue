<script lang="ts">
import AppLanguageSwitcher from "@/components/AppLanguageSwitcher.vue";
export default {
  components: { AppLanguageSwitcher },
  computed: {
    links() {
      return [
        { url: "/", name: this.$t("links.home") },
        { url: "/projects", name: this.$t("links.projects") },
        { url: "/contacts", name: this.$t("links.contacts") },
        { url: "/about", name: this.$t("links.about") },
      ];
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <nuxt-link to="/" class="nuxt-link">
        <a class="navbar-brand" href="#">{{ $t("welcome.name") }}</a>
      </nuxt-link>
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
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li v-for="link in links" :key="link[0]" class="nav-item">
            <nuxt-link :to="link.url" class="nuxt-link">
              {{ link.name }}
            </nuxt-link>
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
.nuxt-link {
  text-decoration: none;
  color: lightgray;
  margin: 0 4px;
}
.navbar-lang {
  color: gray;
  margin-right: 8px;
}
</style>
