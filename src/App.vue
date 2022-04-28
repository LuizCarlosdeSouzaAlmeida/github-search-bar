<script setup>
import { useMainStore } from "@/store/main";
import { storeToRefs } from "pinia";

const main = useMainStore();

const { accounts, selectedAccount } = storeToRefs(main);
</script>

<template>
  <v-app>
    <v-main class="app">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
:root {
  --dark: #200F21;
  --white: #F0F0F0;
  --primary: #382039;
  --secondary: #5A3D5C;
  --secondary-1: #FD71EA;
  --purple: #A51C92;
  --gradient: linear-gradient(90deg, #A51C92 0%, #F638DC 100%);
  --gradient_white: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
}
* {
  box-sizing: border-box;
}
.app {
  background: var(--gradient_white);
}
</style>
