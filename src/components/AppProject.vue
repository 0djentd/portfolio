<script lang="ts">
import ProjectTag from "./ProjectTag.vue";
export default {
  props: ["project"],
  components: { ProjectTag },
};
</script>
<template>
  <div class="col">
    <div class="card shadow-sm">
      <div class="img-container">
        <img
          v-if="project.image != ''"
          :src="project.image"
          alt="Project image"
          class="rounded img-fluid carg-img-top"
        />
      </div>
      <div class="card-body">
        <h4 class="card-title">
          {{ project.name }}
        </h4>
        <p class="card-text">
          {{ project.description }}
        </p>
        <p class="card-text text-muted">
          <!-- TODO: clickable -->
          <ProjectTag v-for="item in project.stack" :key="item" :tag="item" />
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a
              v-if="project.link_site != ''"
              :href="project.link_site"
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Site
            </a>
            <a
              v-if="project.link_gh != ''"
              :href="project.link_gh"
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              GitHub
            </a>
            <!-- TODO: vid on page -->
            <!-- TODO: component -->
            <a
              v-if="project.link_yt != ''"
              :href="project.link_yt"
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              YouTube
            </a>
          </div>
          <small class="text-muted">{{ project.year }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div .img-container {
  max-height: 128px;
  overflow: hidden;
  opacity: 0.95;
}
.card:hover .img-container {
  opacity: 1;
}
img .card-img-top {
  height: 200px;
}
</style>
