export default {
  state: () => {
    return {
      searchStr: "",
      projects: [],
      otherProjects: {},
    };
  },
  mutations: {
    saveSearchStr(state, value) {
      state.searchStr = value;
    },
    saveProjects(state, value) {
      state.projects = value;
    },
    saveOtherProjects(state, value) {
      state.otherProjects = value;
    },
  },
  getters: {
      tags(state) {
        const allTags = [];
        for (let i = 0; i < state.projects.length; i++) {
          const projectTags = state.projects[i].stack;
          for (let x = 0; x < projectTags.length; x++) {
            const tag = projectTags[x];
            if (!allTags.includes(tag)) {
              allTags.push(tag);
            }
          }
        }
        return allTags;
      },
      search_projects(state) {
        const searchStr = state.searchStr;
        let result = [];
        if (searchStr.length === 0) {
          result = state.projects;
        } else {
          result = state.projects.filter(
            (val) =>
              val.name.includes(state.searchStr) ||
              val.stack.includes(state.searchStr) ||
              val.description.includes(state.searchStr)
          );
        }
        return result;
      },
  },
};
