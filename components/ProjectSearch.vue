<script lang="ts">
export default {
  computed: {
    searchStr: {
      set(value) {
        this.$store.commit("saveSearchStr", value);
      },
      get() {
        return this.$store.state.searchStr;
      },
    },
    tags() {
      return this.$store.getters.tags;
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
      v-model="searchStr"
      class="form-control me-2"
      type="search"
      :placeholder="$t('projects.search')"
      aria-label="Search projects"
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
