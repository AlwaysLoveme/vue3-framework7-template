import { debounce } from "lodash/function";
export default {
  name: "debounce",
  mounted(el, binding) {
    const bindClick = debounce(
      function () {
        if (typeof binding.value !== "function") {
          throw Error("指令值需是函数");
        } else {
          binding.value();
        }
      },
      1000,
      {
        leading: true,
      }
    );
    el.__function = bindClick;
    el.addEventListener("touchend", bindClick, false);
  },
  unmounted(el) {
    if (el.__function) {
      el.removeEventListener("touchend", el.__function, false);
    }
  },
};
