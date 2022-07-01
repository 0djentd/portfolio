export default {
  state: () => {
    return {
      searchStr: "",
    };
  },
  mutations: {
    saveSearchStr(state, value) {
      state.searchStr = value
    }
  }
};
