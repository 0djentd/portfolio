<template>
  <div class="lang">
    <span class="material-symbols-outlined"> language </span>
    <select class="form-select" v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>
<style lang="scss" scoped>
div.lang {
  display: flex;
  justify-content: right;
  span {
    margin: auto 10px;
  }
  select {
    width: 80px;
  }
}
</style>
