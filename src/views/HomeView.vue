<script lang="ts">
import { RouterLink } from "vue-router";
import { useSkillsStore } from "../stores/skills";
import AppLanguageSwitcher from "../components/AppLanguageSwitcher.vue";
export default {
  components: { RouterLink, AppLanguageSwitcher },
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
        <h1 class="display-5 fw-bold text-white">{{ $t("welcome.name") }}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">{{ $t("welcome.description") }}</p>
          <div
            class="portfolio-buttons d-grid gap-2 d-sm-flex justify-content-sm-center"
          >
            <a
              type="button"
              class="btn btn-outline-info btn-lg px-4"
              href="./#about-me"
            >
              {{ $t("buttons.about_me") }}
            </a>
            <RouterLink
              to="/projects"
              class="btn btn-outline-light btn-lg px-4"
            >
              {{ $t("buttons.projects") }}
            </RouterLink>
            <RouterLink
              to="/contacts"
              class="btn btn-outline-light btn-lg px-4"
            >
              {{ $t("buttons.contacts") }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5" id="featured-3">
      <div class="d-flex">
        <h2 class="pb-2 border-bottom w-100" id="about-me">
          {{ $t("welcome.about.title") }}
        </h2>
        <AppLanguageSwitcher class="lang" />
      </div>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <h2>
            {{ $t("welcome.about.projects.title") }}
          </h2>
          <p>
            {{ $t("welcome.about.projects.description") }}
          </p>
          <RouterLink
            to="/projects"
            class="icon-link d-inline-flex align-items-center"
          >
            {{ $t("welcome.about.projects.link") }}
          </RouterLink>
        </div>
        <div class="feature col">
          <h2>
            {{ $t("welcome.about.skills.title") }}
          </h2>
          <div v-for="skill in store.skills" :key="skill.id">
            <h5>{{ skill.name }}</h5>
            <p>{{ skill.description }}</p>
          </div>
        </div>
        <!--         <div class="feature col">
          <h2></h2>
          <p></p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.portfolio-buttons {
  margin-left: auto;
  margin-right: auto;
  * {
    min-width: 200px;
  }
}
.lang {
  margin-left: 30px;
}
</style>
