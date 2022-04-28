<script setup>
import Logo from "@/assets/logo.svg";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
</script>

<template>
  <v-container class="home">
  <img class="home-bg--image" src="@/assets/Cover.png" />
    <v-row class="home-logo py-15">
      <Logo />
    </v-row>
    <v-row>
      <h1 class="home-title">
        Buscar um usuário no <span class="home-title--bold">GitHub</span> <br />
        ficou muito <span class="home-title--bold">fácil!</span>
      </h1>
    </v-row>
    <v-row class="home-searchBar">
      <SearchBar />
    </v-row>
    <v-row class="home-social-media--bar">
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
.home {
  margin-left: 150px;
}
.home-logo {
  margin-bottom: 81px;
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
.home-searchBar {
  margin-top: 81px;
}
.home-social-media--bar {
  position: absolute;
  width: 100%;
  bottom: 41px;
}
</style>
