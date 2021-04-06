/**
 * 配置Tab route
 * https://framework7.io/docs/routes.html
 */
import tabChilds from "./tab-routes-child";

const ctx = require.context("../pages/tabs/", false, /\.vue$/);
const componentList = {};
for (const key of ctx.keys()) {
  const fileKey = key.replace(/\.\/|\.vue/g, "");
  componentList[fileKey] = ctx(key).default;
}

const TabsRoute = [
  {
    path: "/",
    redirect: "/home/",
  },
  {
    path: "/",
    asyncComponent: () => import("@/pages/tabs/tabs.vue"),
    tabs: tabChilds,
  },
];

export default TabsRoute;
