const ctx = require.context("./modules/", false, /\.js$/);

const componentList = {};
for (const key of ctx.keys()) {
  const fileKey = key.replace(/\.\/|\.js/g, "");
  componentList[fileKey] = ctx(key).default;
}

const install = (app) => {
  // 注册自定义组件
  Object.keys(componentList).forEach((item) => {
    app.directive(item, componentList[item]);
  });
};
export default { install };
