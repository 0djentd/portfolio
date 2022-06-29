<script>
export default {
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
<template>
  <div class="lang btn-group">
    <button
      class="btn btn-outline"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="material-symbols-outlined"> language </span>
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        <a class="btn w-100" @click.prevent="switchLanguage(locale)">
          {{ locale }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-menu {
  width: 100px;
}
span {
  color: gray;
}
.lang {
  justify-content: center;
  align-items: center;
}
button {
  color: white;
}
</style>
