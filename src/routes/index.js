import TabsRoute from "./tabs";
const routes = [
  ...TabsRoute,
  {
    path: "/main/:id",
    name: "main",
    options: {
      transition: "f7-push",
    },
    asyncComponent: () => import("@/pages/main/home-main/home-main.vue"),
  },
  // Default route, match to all pages (e.g. 404 page)
  {
    path: "(.*)",
    asyncComponent: () => import("@/pages/notfound/notfound.vue"),
  },
];
export default routes;
