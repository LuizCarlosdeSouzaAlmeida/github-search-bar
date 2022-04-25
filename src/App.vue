<script setup>
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const main = useMainStore();

const { accounts, selectedAccount } = storeToRefs(main);
</script>

<template>
  <v-app>
    <v-main>
      <router-link to="/">Home</router-link>
      <router-link to="/results">Search</router-link>
      <router-view />
    </v-main>
  </v-app>
</template>
