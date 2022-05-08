<script setup>
import Logo from "@/assets/LogoHeader.svg";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <v-row align-content="center">
    <v-col cols="3">
      <Logo class="navbar-logo" @click="router.push('/')" />
    </v-col>
    <v-col cols="6">
      <SearchBar />
    </v-col>
    <v-col cols="3">
      <SocialMedia />
    </v-col>
  </v-row>
</template>
<style scoped>
.navbar-logo {
  cursor: pointer;
}
:deep() .media-bar {
  justify-content: end;
}
</style>
