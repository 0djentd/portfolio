<script lang="ts">
import AppLanguageSwitcher from "@/components/AppLanguageSwitcher.vue";

export default {
  components: { AppLanguageSwitcher },
  computed: {
    skills() {
      return [
        {
          name: this.$t("skills.general.name"),
          content: this.$t("skills.general.content"),
        },
        {
          name: this.$t("skills.web.name"),
          content: this.$t("skills.web.content"),
        },
        {
          name: this.$t("skills.python.name"),
          content: this.$t("skills.python.content"),
        },
        {
          name: this.$t("skills.virtualization.name"),
          content: this.$t("skills.virtualization.content"),
        },
        {
          name: this.$t("skills._3d.name"),
          content: this.$t("skills._3d.content"),
        },
        {
          name: this.$t("skills.languages.name"),
          content: this.$t("skills.languages.content"),
        },
      ];
    },
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
            <nuxt-link to="/projects" class="btn btn-outline-light btn-lg px-4">
              {{ $t("buttons.projects") }}
            </nuxt-link>
            <nuxt-link to="/contacts" class="btn btn-outline-light btn-lg px-4">
              {{ $t("buttons.contacts") }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div id="featured-3" class="container px-4 py-5">
      <div class="d-flex">
        <h2 id="about-me" class="pb-2 border-bottom w-100">
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
          <nuxt-link
            to="/projects"
            class="icon-link d-inline-flex align-items-center"
          >
            {{ $t("welcome.about.projects.link") }}
          </nuxt-link>
        </div>
        <div class="feature col">
          <h2>
            {{ $t("welcome.about.skills.title") }}
          </h2>
          <div v-for="skill in skills" :key="skill.id">
            <h5>{{ skill.name }}</h5>
            <p>{{ skill.content }}</p>
          </div>
        </div>
        <div class="feature col">
          <img
            src="/portfolio/portfolio_photo.jpg"
            class="rounded img-fluid carg-img-top"
          />
        </div>
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
