<script setup>
import Medium from "@/assets/Medium.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Instagram from "@/assets/Instagram.svg";
</script>

<template>
  <v-container class="media-bar d-flex px-0">
    <a href="https://medium.com/@bitwisetechnology">
      <Medium class="media-bar--icon" />
    </a>
    <a href="https://www.linkedin.com/company/bitwisetechnology/?originalSubdomain=br">
      <LinkedIn class="media-bar--icon" />
    </a>
    <a href="https://www.instagram.com/bitwisetechnology/">
      <Instagram class="media-bar--icon" />
    </a>
  </v-container>
</template>

<style scoped>
.media-bar {
  margin: 0;
  justify-content: center;
}
.media-bar--icon {
  height: 24px;
  margin: 5px;
  color: var(--secondary-1);
}
</style>
