import { defineStore } from "pinia";
import { projects } from "../data.ts";

export const useProjectsStore = defineStore({
  id: "projects",
  state: () => {
    return {
      search_str: "",
      projects: projects,
    };
  },
  getters: {
    search_projects() {
      if (this.search_str.length == 0) {
        return this.projects;
      }
      return this.projects.filter(
        (val) =>
          val.name.includes(this.search_str) ||
          val.stack.includes(this.search_str) ||
          val.description.includes(this.search_str)
      );
    },
    tags() {
      let all_tags = [];
      for (let i = 0; i < this.projects.length; i++) {
        const project_tags = this.projects[i].stack;
        for (let x = 0; x < project_tags.length; x++) {
          const tag = project_tags[x];
          if (!all_tags.includes(tag)) {
            all_tags.push(tag);
          }
        }
      }
      return all_tags;
    },
  },
});
