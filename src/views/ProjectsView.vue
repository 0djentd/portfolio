<script lang="ts">
import AppProject from "../components/AppProject.vue";
import ProjectTag from "../components/ProjectTag.vue";
import { useProjectsStore } from "../stores/projects";
import { other_projects } from "../data";

export default {
  components: { AppProject, ProjectTag },
  data() {
    return {
      store: useProjectsStore(),
      other_projects,
    };
  },
};
</script>
<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">{{ $t("projects.title") }}</h1>
        <p class="lead text-muted">
          {{ $t("projects.description") }}
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div
      class="d-flex justify-content-center align-items-center search-projects mb-4"
      role="search"
    >
      <input
        class="form-control me-2"
        type="search"
        :placeholder="$t('projects.search')"
        aria-label="Search projects"
        v-model="store.search_str"
      />
      <!-- rework, looks bad -->
      <button
        class="p-2 mr-4 btn-outline-info btn-close"
        @click="store.search_str = ''"
      ></button>
    </div>
    <div class="container mb-4 p-2 pb-0">
      <div class="card tags">
        <h6 class="text-muted mx-auto m-2 mb-0">{{ $t("projects.tags") }}</h6>
        <div class="card-body">
          <p class="card-text">
            <ProjectTag v-for="tag in store.tags" :key="tag" :tag="tag" />
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <AppProject
          v-for="project in store.search_projects"
          :key="project.year"
          :project="project"
        />
        <AppProject :project="other_projects" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-projects {
  max-width: 480px;
  margin: 0 auto;
}
.tags {
  max-width: 800px;
  margin: 0 auto;
}
</style>
