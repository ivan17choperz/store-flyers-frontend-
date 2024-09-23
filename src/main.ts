import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./routers/index.routes";
import { createPinia } from "pinia";



createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app");
