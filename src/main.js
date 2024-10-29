import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@plugins/router";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
