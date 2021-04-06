<template>
  <f7-page :page-content="false">
    <f7-toolbar tabbar labels bottom class="no-hairline">
      <f7-link
        v-for="(item, index) of tabChilds"
        :key="index"
        :tab-link="`#${item.id}`"
        :href="`/${item.path}`"
        :route-tab-id="item.id"
        :icon-f7="item.meta.icon"
        :text="item.meta.title"
      ></f7-link>
    </f7-toolbar>
    <f7-tabs animated swipeable routable>
      <f7-tab
        :key="index"
        :id="item.id"
        class="page-content"
        v-for="(item, index) of tabChilds"
      ></f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import tabChilds from "@/routes/tab-routes-child";
export default {
  name: "tabs",
  setup() {
    return {
      tabChilds,
    };
  },
};
</script>
