/**
 * tab routes 子配置项
 */
const tabChilds = [
  {
    path: "home/",
    id: "home",
    asyncComponent: () => import("../pages/tabs/home.vue"),
    meta: {
      title: "首页",
      icon: "house_alt_fill",
    },
  },
  {
    path: "user/",
    id: "user",
    asyncComponent: () => import("../pages/tabs/user.vue"),
    meta: {
      title: "用户",
      icon: "person_crop_circle",
    },
  },
  {
    path: "about/",
    id: "about",
    asyncComponent: () => import("../pages/tabs/about.vue"),
    meta: {
      title: "关于",
      icon: "text_bubble_fill",
    },
  },
  {
    path: "setting/",
    id: "setting",
    asyncComponent: () => import("@/pages/tabs/setting.vue"),
    meta: {
      title: "设置",
      icon: "gear_alt_fill",
    },
  },
];
export default tabChilds;
