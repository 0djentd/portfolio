<script type="ts">
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";
export default {
  components: { AppFooter, AppNavbar, RouterView },
  data() {
    return {
      links: [
        ["/", "Home"],
        ["/projects", "Projects"],
        ["/contacts", "Contacts"],
        ["/about", "About this website"],
      ],
    };
  },
};
</script>

<template>
  <AppNavbar :links="links" />
  <div class="pusher" />
  <RouterView />
  <AppFooter :year="2022" />
</template>

<style scoped>
div .pusher {
  height: 50px;
}
</style>
