import { f7 } from "framework7-vue";

/**
 * @Description: 路由跳转  router.navigate(url)  router.navigate(url, { ...options})
 * @author 朱贤
 * @date 2021-01-18 11:16:22
 **/
const router = f7.views.main.router;
/**
 * @Description: 获取路由参数 route.params || route.query
 * @author 朱贤
 * @date 2021-01-18 11:17:25
 **/
const route = f7.views.main.router.currentRoute;

export { route, router };
