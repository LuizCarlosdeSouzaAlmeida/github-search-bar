<template>
  <v-app>
    <v-main class="app">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
:root {
  --dark: #200f21;
  --white: #f0f0f0;
  --primary: #382039;
  --secondary: #5a3d5c;
  --secondary-1: #fd71ea;
  --purple: #a51c92;
  --gradient: linear-gradient(90deg, #a51c92 0%, #f638dc 100%);
  --gradient_white: linear-gradient(359.39deg, #efeeee 0.46%, #ffffff 99.42%);
}
* {
  box-sizing: border-box;
}
.app {
  background: var(--gradient_white);
}
</style>
