<template>
  <v-app>
    <v-main>
      <router-link to="/">Home</router-link>
      <router-link to="/results">Search</router-link>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
