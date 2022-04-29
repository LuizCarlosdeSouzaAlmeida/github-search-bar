<script setup>
import GitHub from "@/assets/GitHub.svg";
import NoResultsDialog from "@/components/SearchBar/NoResultsDialog/NoResultsDialog.vue";
</script>
<template>
  <v-col cols="12" class="d-flex d-inline pa-0">
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      label="Buscar usuário"
      variant="putlined"
      bg-color="#fff"
      single-line
      class="searchBar rounded"
    ></v-text-field>
    <v-btn
      height="56px"
      width="64px"
      color="var(--secondary)"
      elevation="0"
      class="ml-n3"
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
