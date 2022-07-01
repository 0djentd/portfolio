<template>
  <div>
    <div class="container my-5">
      <div class="contacts">
        <h2 id="about-me" class="pb-2 border-bottom w-100">
          {{ $t("contacts.title") }}
        </h2>
        <div>
          <p>
            Email:
            <a class="lead m-2" href="mailto:0djentd@gmail.com"
              >0djentd@gmail.com</a
            >
          </p>
          <p>
            Github:
            <a class="lead m-2" href="https://github.com/0djentd"
              >https://github.com/0djentd</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  margin: 0 auto;
}
div.contacts {
  max-width: 400px;
  margin: 120px auto;
}
</style>
