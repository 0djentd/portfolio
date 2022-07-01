<script lang="ts">
import AppProject from "@/components/AppProject.vue";
import ProjectTag from "@/components/ProjectTag.vue";

export default {
  components: { AppProject, ProjectTag },
  data() {
    return { searchStrInput: "" };
  },
  computed: {
    searchStr() {
      return this.$store.state.searchStr;
    },
    projects() {
      return [
        {
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
        },
        {
          name: "Alprou",
          description: "Website for managing your routines.",
          year: "2022",
          image: "screenshot_alprou.png",
          link_gh: "https://github.com/0djentd/alprou",
          link_site: "https://0djentd.pythonanywhere.com/",
          link_yt: "",
          type: "website",
          stack: [
            "vue",
            "rest",
            "api",
            "html",
            "css",
            "js",
            "sass",
            "npm",
            "vuex",
          ],
        },
        {
          name: "Alprou (backend)",
          description: "Website for managing your routines. (backend)",
          year: "2022",
          image: "screenshot_alprou_backend.png",
          link_gh: "https://github.com/0djentd/alprou-backend",
          link_site: "https://0djentd.pythonanywhere.com/",
          link_yt: "",
          type: "website",
          stack: ["django", "rest", "api"],
        },
        {
          name: "Portfolio",
          description: "This website.",
          year: "2022",
          image: "screenshot_portfolio.png",
          link_gh: "https://github.com/0djentd/portfolio",
          link_site: "/portfolio/",
          link_yt: "",
          type: "website",
          stack: ["vue", "html", "css", "js", "ts", "npm", "pinia"],
        },
        {
          name: "libemtk",
          description:
            "Python library for Blender, designed to bring new level of abstraction to modifiers stack.",
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
          name: "modal_shortcuts",
          description:
            "Keyboard shortcuts and other utility for modal operators in Blender",
          year: "2021",
          image: "",
          link_gh: "https://github.com/0djentd/modal_shortcuts",
          link_site: "",
          link_yt: "",
          type: "library",
          stack: ["python", "ui", "blender", "json", "oop", "3d"],
        },
        {
          name: "class_variables_editor_ui",
          description: "UI for editing python's class variables in Blender",
          year: "2021",
          image: "screenshot_class_variables_editor_ui.png",
          link_gh: "https://github.com/0djentd/class_variables_editor_ui",
          link_site: "",
          link_yt: "",
          type: "library",
          stack: ["python", "ui", "blender", "oop", "regex"],
        },
      ];
    },
    otherProjects() {
      return {
        name: "Other projects",
        description: "My github repositories",
        year: "2019-2022",
        image: "",
        link_gh: "https://github.com/0djentd?tab=repositories",
        link_site: "",
        link_yt: "",
        type: "",
        stack: [
          "python",
          "html",
          "js",
          "css",
          "vue",
          "oop",
          "api",
          "script",
          "logging",
          "regex",
        ],
      };
    },
    tags() {
      const allTags = [];
      for (let i = 0; i < this.projects.length; i++) {
        const projectTags = this.projects[i].stack;
        for (let x = 0; x < projectTags.length; x++) {
          const tag = projectTags[x];
          if (!allTags.includes(tag)) {
            allTags.push(tag);
          }
        }
      }
      return allTags;
    },
    search_projects() {
      const searchStr = this.searchStr;
      let result = [];
      if (searchStr.length === 0) {
        result = this.projects;
      } else {
        result = this.projects.filter(
          (val) =>
            val.name.includes(this.searchStr) ||
            val.stack.includes(this.searchStr) ||
            val.description.includes(this.searchStr)
        );
      }
      return result;
    },
  },
  methods: {
    updateSearchStr(event) {
      this.$store.commit("saveSearchStr", this.searchStrInput);
    },
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
      <div
        class="d-flex justify-content-center align-items-center search-projects mb-4"
        role="search"
      >
        <input
          v-model="searchStrInput"
          class="form-control me-2"
          type="search"
          :placeholder="$t('projects.search')"
          aria-label="Search projects"
          @input="updateSearchStr()"
        />
        <!-- rework, looks bad -->
        <button
          class="p-2 mr-4 btn-outline-info btn-close"
          @click="searchStr = ''"
        ></button>
      </div>
      <div class="container mb-4 p-2 pb-0">
        <div class="card tags">
          <h6 class="text-muted mx-auto m-2 mb-0">{{ $t("projects.tags") }}</h6>
          <div class="card-body">
            <p class="card-text">
              <ProjectTag v-for="tag in tags" :key="tag" :tag="tag" />
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <AppProject
            v-for="project in search_projects"
            :key="project.year"
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
