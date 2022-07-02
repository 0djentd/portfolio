<script lang="ts">
import AppProject from "@/components/AppProject.vue";
import ProjectTagsList from "@/components/ProjectTagsList.vue";
import ProjectSearch from "@/components/ProjectSearch.vue";

export default {
  components: { AppProject, ProjectTagsList, ProjectSearch },
  data() {
    return { searchStrInput: "" };
  },
  computed: {
    searchStr() {
      return this.$store.state.searchStr;
    },
    projects() {
      return this.$store.state.projects;
    },
    otherProjects() {
      return this.$store.state.otherProjects;
    },
    tags() {
      return this.$store.getters.tags;
    },
    search_projects() {
      return this.$store.getters.search_projects;
    },
  },
  mounted() {
    this.updateProjects()
  },
  methods: {
    updateSearchStr(event) {
      this.$store.commit("saveSearchStr", this.searchStrInput);
    },
    updateProjects() {
      const otherProjects = {
        name: this.$t("other_projects_data.name"),
        description: this.$t("other_projects_data.description"),
        year: "2019-2022",
        image: "screenshot_other_projects.png",
        link_gh: "https://github.com/0djentd?tab=repositories",
        link_site: "",
        link_yt: "",
        type: "",
        stack: [
          "python",
          "backend",
          "linux",
          "SPA",
          "html",
          "js",
          "css",
          "vue",
          "oop",
          "api",
          "app",
          "script",
          "config",
          "logging",
          "regex",
        ],
      };
      const projects = [
        {
          name: "Alprou",
          description: this.$t("projects_data.alprou"),
          year: "2022",
          image: "screenshot_alprou.png",
          link_gh: "https://github.com/0djentd/alprou",
          link_site: "https://0djentd.pythonanywhere.com/",
          link_yt: "",
          type: "website",
          stack: [
            "vue",
            "SPA",
            "vuex",
            "bootstrap",
            "vuetify",
            "rest",
            "api",
            "html",
            "css",
            "js",
            "sass",
            "npm",
            "app", 
          ],
        },
        {
          name: "libemtk",
          description: this.$t("projects_data.libemtk"),
          year: "2021",
          image: "screenshot_libemtk.png",
          link_gh: "https://github.com/0djentd/libemtk",
          link_site: "",
          link_yt: "",
          type: "library",
          stack: [
            "python",
            "blender",
            "unittest",
            "json",
            "oop",
            "3d",
            "logging",
            "regex",
          ],
        },
        {
          name: "Alprou (backend)",
          description: this.$t("projects_data.alprou_backend"),
          year: "2022",
          image: "screenshot_alprou_backend.png",
          link_gh: "https://github.com/0djentd/alprou-backend",
          link_site: "https://0djentd.pythonanywhere.com/",
          link_yt: "",
          type: "website",
          stack: ["backend", "python", "django", "rest", "api", "DRF", "auth", "SQL"],
        },
        {
          name: "Portfolio",
          description: this.$t("projects_data.portfolio"),
          year: "2022",
          image: "screenshot_portfolio.png",
          link_gh: "https://github.com/0djentd/portfolio",
          link_site: "https://0djentd.github.io/portfolio/",
          link_yt: "",
          type: "website",
          stack: ["vue", "SPA", "vuex", "nuxt", "app", "html", "css", "js", "npm", "bootstrap"],
        },
        {
          name: "EMTK",
          description: this.$t("projects_data.emtk"),
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
        },
        {
          name: "modal_shortcuts",
          description: this.$t("projects_data.modal_shortcuts"),
          year: "2021",
          image: "screenshot_modal_shortcuts.png",
          link_gh: "https://github.com/0djentd/modal_shortcuts",
          link_site: "",
          link_yt: "",
          type: "library",
          stack: ["python", "ui", "blender", "json", "oop", "3d"],
        },
        {
          name: "class_variables_editor_ui",
          description: this.$t("projects_data.class_variables_editor_ui"),
          year: "2021",
          image: "screenshot_class_variables_editor_ui.png",
          link_gh: "https://github.com/0djentd/class_variables_editor_ui",
          link_site: "",
          link_yt: "",
          type: "library",
          stack: ["python", "ui", "blender", "oop", "regex"],
        },
      ];
      this.$store.commit("saveProjects", projects)
      this.$store.commit("saveOtherProjects", otherProjects)
    }
  },
};
</script>
<template>
  <div>
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
      <ProjectSearch />
      <ProjectTagsList />
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <AppProject
            v-for="project in search_projects"
            :key="project.id"
            :project="project"
          />
          <AppProject :project="otherProjects" />
        </div>
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
