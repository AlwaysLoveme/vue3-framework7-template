<template>
  <f7-page>
    <navbar title="其他"></navbar>
    <p>router: {{ f7router.currentRoute }}</p>
    <p>route: {{ f7route }}</p>
  </f7-page>
</template>

<script>
export default {
  name: "home-main",
  props: {
    f7route: Object,
    f7router: Object,
  },
  setup(props) {
    console.log(props.f7router, "\n");
  },
};
</script>

<style scoped lang="scss"></style>
