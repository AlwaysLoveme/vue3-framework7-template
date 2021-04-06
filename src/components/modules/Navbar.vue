<template>
  <f7-navbar class="no-hairline">
    <f7-nav-left v-if="backLink">
      <slot name="left">
        <f7-button
          panel-close
          popup-close
          sheet-close
          popover-close
          actions-close
          icon-size="24"
          :text="backLink"
          class="no-padding"
          icon-f7="chevron_left"
          @click="router.back()"
        ></f7-button>
      </slot>
    </f7-nav-left>
    <f7-nav-title>{{ title }}</f7-nav-title>
    <f7-nav-right>
      <slot name="right"></slot>
    </f7-nav-right>
  </f7-navbar>
</template>

<script>
import { f7 } from "framework7-vue";

export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: "",
    },
    backLink: {
      type: [Boolean, String],
      default: "返回",
    },
  },
  setup() {
    const router = f7.views.main.router;

    return {
      router,
    };
  },
};
</script>

<style scoped lang="scss"></style>
