import { f7 } from "framework7-vue";

const toast = (text = "") =>
  f7.toast.create({
    text,
    position: "center",
  });
const showLoading = () => f7.preloader.show();
const hideLoading = () => f7.preloader.hide();

export { toast, showLoading, hideLoading };
