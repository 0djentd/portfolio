<script>
import ProjectTag from '@/components/ProjectTag.vue'

export default {
  components: {
    ProjectTag
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
  },
};
</script>
<template>
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
</template>
