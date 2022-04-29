<script setup>
var repos = [
  {
    id: 1,
    name: "Bitwise",
    commits_count: "1.5k",
    last_commit_date: "1 dia atrás",
    last_commit_hash: "0x0",
  },
  {
    id: 2,
    name: "dgagae",
    commits_count: "0.5k",
    last_commit_date: "5 dias atrás",
    last_commit_hash: "0x0",
  },
  {
    id: 3,
    name: "Bitbhwrdeghwerwise",
    commits_count: "1k",
    last_commit_date: "3578 dias atrás",
    last_commit_hash: "0x0",
  },
  {
    id: 4,
    name: "Bitbhwrdeghwerwise",
    commits_count: "1k",
    last_commit_date: "3578 dias atrás",
    last_commit_hash: "0x0",
  },
  {
    id: 5,
    name: "Bitbhwrdeghwerwise",
    commits_count: "1k",
    last_commit_date: "3578 dias atrás",
    last_commit_hash: "0x0",
  },
  {
    id: 6,
    name: "Bitbhwrdeghwerwise",
    commits_count: "1k",
    last_commit_date: "3578 dias atrás",
    last_commit_hash: "0x0",
  },
  {
    id: 7,
    name: "Bitbhwrdeghwerwise",
    commits_count: "1k",
    last_commit_date: "3578 dias atrás",
    last_commit_hash: "0x0",
  },
  {
    id: 8,
    name: "Bitbhwrdeghwerwise",
    commits_count: "1k",
    last_commit_date: "3578 dias atrás",
    last_commit_hash: "0x0",
  },
];
</script>
<template>
  <v-row class="pt-8">
    <v-col cols="2">
      <v-img class="rounded-circle" src="https://picsum.photos/120/120" />
    </v-col>
    <v-col align-self="end">
      <h2 class="py-3">Nome Sobrenome</h2>
      <v-card class="text-center" width="96px" height="64px">
        <v-card-header-text class="pt-2"> 32 </v-card-header-text>
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
        <tr v-for="repo in repos" :key="repo.id">
          <td>{{ repo.name }}</td>
          <td>{{ repo.commits_count }}</td>
          <td>{{ repo.last_commit_date }}</td>
          <td>{{ repo.last_commit_hash }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-row>
</template>
<style scoped></style>
