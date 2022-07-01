<script>
import AppFooter from "@/components/AppFooter.vue";
import AppNavbar from "@/components/AppNavbar.vue";
export default {
  components: { AppFooter, AppNavbar },
};
</script>

<template>
  <div>
    <AppNavbar />
    <div class="pusher" />
    <Nuxt />
    <AppFooter :year="2022" />
  </div>
</template>

<style>
div .pusher {
  height: 50px;
}
</style>
