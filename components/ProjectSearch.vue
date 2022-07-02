<script lang="ts">
export default {
  data() {
    return { searchStrInput: "" };
  },
  computed: {
    searchStr() {
      return this.$store.state.searchStr;
    },
    tags() {
      return this.$store.getters.tags;
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
    <button
      class="p-2 mr-4 btn-outline-info btn-close"
      @click="searchStr = ''"
    ></button>
  </div>
</template>

<style scoped>
.search-projects {
  max-width: 480px;
  margin: 0 auto;
}
</style>
