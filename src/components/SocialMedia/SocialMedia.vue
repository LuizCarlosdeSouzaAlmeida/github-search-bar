<script setup>
import Medium from "@/assets/Medium.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Instagram from "@/assets/Instagram.svg";
</script>

<template>
  <v-container class="media-bar">
    <Medium class="media-bar--icon" />
    <LinkedIn class="media-bar--icon" />
    <Instagram class="media-bar--icon" />
  </v-container>
</template>

<style scoped>
* {
  color: var(--secondary-1);
}
.media-bar--icon {
  height: 24px;
  margin: 5px;
}
</style>
