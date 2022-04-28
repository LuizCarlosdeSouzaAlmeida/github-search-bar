<script setup>
import Logo from "@/assets/logo.svg";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
</script>

<template>
  <v-container>
  <img class="home-bg--image" src="@/assets/Cover.png" />
    <v-row>
      <Logo />
    </v-row>
    <v-row>
      <h1 class="home-title">
        Buscar um usuário no <span class="home-title--bold">GitHub</span> <br />
        ficou muito <span class="home-title--bold">fácil!</span>
      </h1>
    </v-row>
    <v-row>
      <SearchBar />
    </v-row>
    <v-row>
      <SocialMedia />
    </v-row>
  </v-container>
</template>

<style scoped>
.home-bg--image {
  position: absolute;
  top: -5px;
  right: -5px;
  height: 85%;
  z-index: 0;
}
.home-title {
  font-family: Raleway;
  font-weight: 400;
  font-size: 42px;
  line-height: 50px;
  color: var(--secondary);
}
.home-title--bold {
  font-weight: 700;
}
</style>
