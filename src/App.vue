<template>
  <f7-app v-bind="f7Params">
    <f7-view
      main
      url="/"
      :stackPages="true"
      :browser-history="history"
      browserHistorySeparator="#"
      class="safe-areas"
    ></f7-view>
  </f7-app>
</template>

<script>
import routes from "@/routes";
import JPUSH from "@/utils/jpush";
import { onMounted, ref } from "vue";
import { f7, f7ready } from "framework7-vue";
import { getDevice } from "./f7-config/f7-custom";
import capacitorApp from "./f7-config/capacitor-app.js";
export default {
  name: "App",
  components: {},
  setup() {
    const device = getDevice();
    const history = ref(false);
    // 仅用于测试环境
    history.value = process.env.NODE_ENV === "test";

    const f7Params = {
      name: "My App", // App name
      theme: "ios", // Automatic theme detection
      id: "io.framework7.myapp", // App bundle ID
      // App routes
      routes: routes,
      touch: {
        iosTouchRipple: true,
      },

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.capacitor,
        scrollIntoViewCentered: device.capacitor,
      },
      // Capacitor Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: true,
      },
    };

    const f7Ready = () => {
      // Init capacitor APIs (see capacitor-app.js)
      if (device.capacitor) {
        capacitorApp.init(f7);
        document.addEventListener(
          "deviceready",
          function () {
            JPUSH.init();
            JPUSH.setAlias("app");
          },
          false
        );
      }
    };

    onMounted(() => {
      f7ready(f7Ready);
    });

    return {
      history,
      f7Params,
    };
  },
};
</script>

<style lang="less">
@import "styles/app";
@import "styles/f7-theme.css";
@import "styles/f7-custom";
</style>
