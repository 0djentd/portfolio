<script>
import AppProject from "../components/AppProject.vue";
import ProjectTag from "../components/ProjectTag.vue";
import { useProjectsStore } from "@/stores/projects";

export default {
  components: { AppProject, ProjectTag },
  data() {
    const store = useProjectsStore();
    return {
      store: store,
    };
  },
};
</script>
<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">My personal projects</h1>
        <p class="lead text-muted">
          Some open source pieces of software that worked on.
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
        placeholder="Search projects"
        aria-label="Search projects"
        v-model="store.search_str"
      />
      <!-- rework, looks bad -->
      <button
        class="p-2 mr-4 btn-outline-info btn-close"
        @click="store.search_str = ''"
      ></button>
    </div>
    <div class="card container mb-4 p-2">
      <p>
        <ProjectTag v-for="tag in store.tags" :key="tag" :tag="tag" />
      </p>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <AppProject
          v-for="project in store.search_projects"
          :key="project.year"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-projects {
  max-width: 480px;
  margin: 0 auto;
}
</style>
