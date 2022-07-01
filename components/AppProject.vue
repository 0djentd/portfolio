<script lang="ts">
import ProjectTag from "@/components/ProjectTag.vue";
export default {
  components: { ProjectTag },
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: "EMTK",
          description:
            "Blender addon, designed to simplify editing modifiers stack through modal operators and abstraction layers.",
          year: "2021-2022",
          image: "screenshot_emtk.jpg",
          link_gh: "https://github.com/0djentd/emtk",
          link_site: "",
          link_yt: "",
          type: "addon",
          stack: [
            "python",
            "blender",
            "json",
            "oop",
            "ui",
            "3d",
            "logging",
            "regex",
            "libemtk",
          ],
        };
      },
    },
  },
};
</script>
<template>
  <div v-if="project" class="col">
    <div class="card shadow-sm">
      <div v-if="project.image" class="img-container">
        <img
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
              {{ $t("projects.project.site_link") }}
            </a>
            <a
              v-if="project.link_gh != ''"
              :href="project.link_gh"
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              {{ $t("projects.project.source_code_link") }}
            </a>
            <!-- TODO: vid on page -->
            <!-- TODO: component -->
            <a
              v-if="project.link_yt != ''"
              :href="project.link_yt"
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              {{ $t("projects.project.video_link") }}
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
