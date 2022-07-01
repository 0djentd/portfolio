<script lang="ts">
export default {
  props: { tag: { type: String, required: true } },
  methods: {
    search_tag() {
      this.$store.commit("saveSearchStr", this.tag);
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
