<script lang="ts">
import { RouterLink } from "vue-router";
import { useSkillsStore } from "../stores/skills";
export default {
  components: { RouterLink },
  data() {
    return {
      store: useSkillsStore(),
    };
  },
};
</script>

<template>
  <div>
    <div class="bg-dark text-secondary px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">Sergey Shapochkin</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">Programmer, musician, 3d artist.</p>
          <div
            class="portfolio-buttons d-grid gap-2 d-sm-flex justify-content-sm-center"
          >
            <a
              type="button"
              class="btn btn-outline-info btn-lg px-4"
              href="./#about-me"
            >
              About me
            </a>
            <RouterLink
              to="/projects"
              class="btn btn-outline-light btn-lg px-4"
            >
              Projects
            </RouterLink>
            <RouterLink
              to="/contacts"
              class="btn btn-outline-light btn-lg px-4"
            >
              Contact me
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom" id="about-me">About me</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <h2>Skills</h2>
          <div v-for="skill in store.skills" :key="skill.id">
            <h5>{{ skill.name }}</h5>
            <p>{{ skill.description }}</p>
          </div>
        </div>
        <div class="feature col">
          <h2>Projects</h2>
          <p>
            Some web apps. Some addons and Python modules for Blender - 3d
            modelling suite. A lot of totally random scripts.
          </p>
          <RouterLink
            to="/projects"
            class="icon-link d-inline-flex align-items-center"
            >Take a look!</RouterLink
          >
        </div>
        <div class="feature col">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.portfolio-buttons {
  * {
    min-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
