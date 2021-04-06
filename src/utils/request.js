import { request } from "framework7";
import { f7 } from "framework7-vue";
// import store from '@/store'
import { toast, hideLoading, showLoading } from "@/utils/modal";

const beforeCreate = (config) => {
  showLoading();
  // const { data } = config
  // if (data.cancel === undefined) {
  //   const cancel = utils.id('xxxx-xxxx-xxxx-xxxx')
  //   config.data.cancel = cancel
  //   store.commit('SETREQUESTMUSTER', cancel)
  // } else {
  //   const list = store.state.requestMuster
  //   if (list.indexOf(data.cancel) !== -1) {
  //     return false
  //   } else {
  //     store.commit('SETREQUESTMUSTER', data.cancel)
  //   }
  // }
  return config;
};

const requestInstance = ({
  url,
  data,
  async = true,
  contentType = "application/x-www-form-urlencoded",
  method = "POST",
}) => {
  return new Promise((resolve, reject) => {
    request({
      url,
      data,
      async,
      method,
      timeout: 10000,
      contentType,
      beforeCreate,
      success(res) {
        console.log(JSON.parse(res));
        const data = JSON.parse(res);
        if (data.code && data.code === 1995) {
          f7.views.main.router.navigate("/login/", {
            clearPreviousHistory: true,
          });
        }
        resolve(data);
      },
      error(err) {
        reject(err);
        hideLoading();
        toast(JSON.stringify(err));
      },
      complete() {
        hideLoading();
      },
      statusCode: {
        404: () => toast("请求地址不存在"),
        500: () => toast("服务器错误：500"),
        0: () => toast("网络出错，请稍后重试"),
      },
    })
      .then()
      .catch((err) => {
        console.log(err);
      })
      .finally(() => hideLoading());
  });
};

export { requestInstance };
