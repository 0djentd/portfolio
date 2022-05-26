<script lang="ts">
import { useProjectsStore } from "../stores/projects";
export default {
  data() {
    const store = useProjectsStore();
    return {
      store: store,
    };
  },
  props: ["tag"],
  methods: {
    search_tag() {
      this.store.search_str = this.tag;
    },
  },
};
</script>
<template>
  <span class="text-muted btn pb-0 pt-0 m-0" @click="search_tag">
    {{ tag }}
  </span>
</template>
<style scoped></style>
