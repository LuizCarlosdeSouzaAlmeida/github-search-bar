import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./middleware/apollo.js";

loadFonts();

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .mount("#app");
