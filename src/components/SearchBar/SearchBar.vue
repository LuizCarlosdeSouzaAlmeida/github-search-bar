<script setup>
import GitHub from "@/assets/GitHub.svg";
</script>
<template>
  <v-col cols="12" sm="6" class="d-flex d-inline">
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      label="Buscar usuário"
      variant="putlined"
      bg-color="#fff"
      single-line
      class="searchBar"
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
