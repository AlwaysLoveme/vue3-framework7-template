const ctx = require.context("./modules/", false, /\.vue$/);

const componentList = {};
for (const key of ctx.keys()) {
  const fileKey = key.replace(/\.\/|\.vue/g, "");
  componentList[fileKey] = ctx(key).default;
}

const install = (app) => {
  // 注册自定义组件
  Object.keys(componentList).forEach((item) => {
    app.component(item, componentList[item]);
  });
};
export default { install };
