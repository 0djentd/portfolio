<script lang="ts">
import AppLanguageSwitcher from "@/components/AppLanguageSwitcher.vue";
export default {
  components: { AppLanguageSwitcher },
  props: { year: { type: Number, required: false, default: 2022 } },
};
</script>
<template>
  <div class="container">
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <div class="col-md-4 d-flex align-items-center">
        <a
          href="/"
          class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <svg class="bi" width="30" height="24">
            <use xlink:href="#bootstrap" />
          </svg>
        </a>
        <span class="mb-3 mb-md-0 text-muted"
          >&copy; {{ year }}, Sergey Shapochkin</span
        >
      </div>

      <!-- TODO: add images. -->
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="text-muted" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#github" /></svg
          ></a>
        </li>
        <li class="ms-3">
          <a class="text-muted" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#telegram" /></svg
          ></a>
        </li>
      </ul>
      <AppLanguageSwitcher />
    </footer>
  </div>
</template>
