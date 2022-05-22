<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>
<template>
  <div>
    <div class="bg-dark text-secondary px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">Sergey Shapochkin</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">Programmer, musician, 3d artist.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a
              type="button"
              class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              href="./#about-me"
            >
              About me
            </a>
            <RouterLink to="/projects">
              <button type="button" class="btn btn-outline-light btn-lg px-4">
                Projects
              </button>
            </RouterLink>
            <RouterLink to="/contacts">
              <button type="button" class="btn btn-outline-light btn-lg px-4">
                Contact me
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom" id="about-me">About me</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <h2>Skills</h2>
          <p>Languages: Russian, English, Japanese</p>
          <p>Development: OOP, TDD, vim, vscode</p>
          <p>Web: Django, DRF, Vue, bootstrap, sass.</p>
          <p>Python: numpy, pandas, matplotlib</p>
          <p>
            General: GNU/Linux (ubuntu, debian, fedora, arch), bash, libvirt,
            virt-manager, VirtualBox, Docker.
          </p>
          <p>
            3d: Blender, AutoCAD, Unity3D render pipelines, PBR in general,
            hard-surface modelling, non-destructive modelling.
          </p>
          <!--           <a href="#" class="icon-link d-inline-flex align-items-center">
            Call to action
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#chevron-right" />
            </svg>
          </a> -->
        </div>
        <div class="feature col">
          <h2>Projects</h2>
          <p>
            Some addons and Python modules for Blender - 3d modelling suite.
            Some web apps. A lot of totally random scripts.
          </p>
          <RouterLink
            to="/projects"
            class="icon-link d-inline-flex align-items-center"
            >Take a look!</RouterLink
          >
        </div>
        <div class="feature col">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>
