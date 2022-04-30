<script setup>
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const main = useMainStore();

const { user } = storeToRefs(main);
</script>
<template>
  <v-row class="pt-8">
    <v-col cols="2">
      <v-img class="profile-img rounded-circle" :src="user.avatarUrl" />
    </v-col>
    <v-col align-self="end">
      <h2 class="py-3">{{ user.name }}</h2>
      <v-card class="text-center" width="96px" height="64px">
        <v-card-header-text class="pt-2">
          {{ user.repositories.totalCount }}
        </v-card-header-text>
        <v-card-text class="pa-0"> Repositórios </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="py-10">
    <v-table fixed-header height="300px" class="w-100">
      <thead>
        <h4 class="pa-4">Título</h4>
        <tr>
          <th class="text-left text-uppercase">Nome do Repositório</th>
          <th class="text-left text-uppercase">QTD de Commit</th>
          <th class="text-left text-uppercase">MSF Ultimo Commit</th>
          <th class="text-left text-uppercase">Hash do Ultimo Commit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repo in user.repositories.edges" :key="repo.node.name">
          <td>{{ repo.node.name }}</td>
          <td>{{ repo.node.object.history.totalCount || 0 }}</td>
          <td>{{ repo.node.object.history.edges[0].node.message || 0 }}</td>
          <td>{{ repo.node.object.history.edges[0].node.oid || 0 }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-row>
</template>
<style scoped>
.profile-img {
  z-index: 1 !important;
}
</style>
