<script setup>
import { ref } from "vue";
import GitHub from "@/assets/GitHub.svg";
import NoResultsDialog from "@/components/SearchBar/NoResultsDialog/NoResultsDialog.vue";
import useMainStore from "@/store/main";
import { useRoute } from "vue-router";
const main = useMainStore();
const route = useRoute();
var githubUser = ref("");
function search() {
  main.getUser(githubUser.value);
}
</script>
<template>
  <v-col cols="12" class="d-flex d-inline pa-0">
    <v-text-field
      v-model="githubUser"
      prepend-inner-icon="mdi-magnify"
      label="Buscar usuário"
      variant="solo"
      bg-color="#fff"
      single-line
      @keydown.enter.prevent="search()"
      :class="
        route.path === '/'
          ? 'searchBar rounded'
          : 'searchBar rounded elevation-4'
      "
    ></v-text-field>
    <v-btn
      v-if="route.path === '/'"
      height="56px"
      width="64px"
      color="var(--secondary)"
      elevation="0"
      class="ml-n3"
      @click="search()"
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
