<script setup>
import Medium from "@/assets/Medium.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Instagram from "@/assets/Instagram.svg";
</script>

<template>
  <div class="media-bar d-flex px-0">
    <a href="https://medium.com/">
      <Medium class="media-bar--icon" />
    </a>
    <a href="https://www.linkedin.com/in/luiz-carlos-de-souza-almeida/">
      <LinkedIn class="media-bar--icon" />
    </a>
    <a href="">
      <Instagram class="media-bar--icon" />
    </a>
  </div>
</template>

<style scoped>
.media-bar {
  margin: 0;
}
.media-bar--icon {
  height: 24px;
  margin: 5px;
  color: var(--secondary-1);
}
</style>
