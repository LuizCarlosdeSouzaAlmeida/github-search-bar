<script setup>
import { ref } from "vue";
import GitHub from "@/assets/GitHub.svg";
import NoResultsDialog from "@/components/SearchBar/NoResultsDialog/NoResultsDialog.vue";
import { useMainStore } from "@/store/main";
const main = useMainStore();
var githubUser = ref("");
function search(context) {
  if (context.$route.path === "/") {
    context.$router.push("/details");
  }
  main.getUser(githubUser.value);
}
</script>
<template>
  <v-col cols="12" class="d-flex d-inline pa-0">
    <v-text-field
      v-model="githubUser"
      prepend-inner-icon="mdi-magnify"
      label="Buscar usuário"
      variant="putlined"
      bg-color="#fff"
      single-line
      @keydown.enter.prevent="search(this)"
      :class="
        this.$route.path === '/'
          ? 'searchBar rounded'
          : 'searchBar rounded elevation-4'
      "
    ></v-text-field>
    <v-btn
      v-if="this.$route.path === '/'"
      height="56px"
      width="64px"
      color="var(--secondary)"
      elevation="0"
      class="ml-n3"
      @click="search(this)"
    >
      <GitHub />
    </v-btn>
  </v-col>
  <NoResultsDialog />
</template>

<style scoped>
.searchBar {
  color: #000;
  font-family: Raleway;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  height: 56px;
}
:deep() .v-field__input {
  height: 28px;
}
</style>
