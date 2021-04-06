<template>
  <f7-page>
    <navbar title="首页" :back-link="false"></navbar>

    <div class="padding">
      <f7-button fill round text="导航" href="/main/1"></f7-button>
      <f7-button
        fill
        large
        text="Loading"
        v-throttle="loading"
        class="margin-top"
      ></f7-button>
    </div>
  </f7-page>
</template>

<script>
import { httpTest } from "@/api/home";

export default {
  name: "home",
  props: {
    f7router: Object,
  },
  setup(props) {
    const navigate = () => props.f7router.navigate("/main/");

    const loading = () => {
      httpTest("https://www.ucharts.cn/data.json", {
        test: 0,
      });
    };

    return {
      loading,
      navigate,
    };
  },
};
</script>

<style scoped lang="less"></style>
