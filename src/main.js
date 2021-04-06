import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// Import Framework7
import Framework7 from "./f7-config/f7-custom";

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from "framework7-vue/bundle";

// Import framework7 icons
import "framework7-icons";

// Import custom components
import CustomComponents from "@/components";
import CustomDirectives from "@/directives";

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

const app = createApp(App);
// Register Framework7 Vue components
registerComponents(app);

app.use(store).use(CustomDirectives).use(CustomComponents).mount("#app");
