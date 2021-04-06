import { throttle } from "lodash/function";

export default {
  name: "throttle",
  mounted(el, binding) {
    const bindClick = throttle(
      function () {
        if (typeof binding.value === "function") {
          binding.value();
        } else {
          throw Error("指令值需是函数");
        }
      },
      3000,
      {
        leading: true,
      }
    );
    el.__function = bindClick;
    el.addEventListener("click", bindClick, false);
  },
  unmounted(el) {
    if (el.__function) {
      el.removeEventListener("click", el.__function, false);
    }
  },
};
