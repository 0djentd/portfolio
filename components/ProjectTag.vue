<script>
export default {
  props: { tag: { type: String, required: true } },
  computed: {
    active() {
      return this.$store.state.searchStr.includes(this.tag)
    },
    tagClasses() {
        let classes = ''
        if (this.active) {
            classes = 'btn btn-dark text-light'
        } else {
            classes = 'btn text-muted' 
        }
        return classes + ' py-0 px-1 my-0 mx-1'
    }
  },
  methods: {
    searchTag() {
      this.$store.commit("saveSearchStr", this.tag);
    },
  },
};
</script>

<template>
  <button :class="tagClasses" @click="searchTag">
    {{ tag }}
  </button>
</template>
<style scoped></style>
