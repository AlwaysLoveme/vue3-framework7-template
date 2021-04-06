module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-plusplus": "off",
    "no-empty": 2, // 禁止空块语句
    "no-extra-boolean-cast": 2, // 禁止不必要的布尔类型转换，如 !!true
    "no-extra-semi": 2, // 禁用不必要的分号
    "no-dupe-args": 2, // 禁止在函数定义或表达中出现重名参数
    "no-dupe-keys": 2, // 禁止在对象字面量中出现重复的键
    "eqeqeq": [2, "smart"], // ??? 要求使用 === 和 !==
    "no-empty-function": 0, // 禁止出现空函数
    "no-empty-pattern": 2, // 禁止使用空解构模式
    "camelcase": 2, // 要求使用骆驼拼写法
    "comma-dangle": 0, // 要求或禁止使用拖尾逗号
    "new-cap": 2, // 要求构造函数首字母大写
    "quotes": [0, "single"], // 强制使用一致的单引号
    "spaced-comment": 2, // 要求在注释前有空白
    "no-class-assign": 2, // 不允许修改类声明的变量
    "no-confusing-arrow": 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-const-assign": 2, // 不允许改变用const声明的变量
    "no-dupe-class-members": 2, // 不允许类成员中有重复的名称
    "no-duplicate-imports": 2, // 禁止重复导入
    "no-new-symbol": 0, // 禁止 Symbol 操作符和 new 一起使用lines-between
    "no-useless-computed-key": 2, // 禁止在对象中使用不必要的计算属性
    "no-useless-constructor": 2, // 禁用不必要的构造函数
    "no-useless-rename": 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    "no-var": 2, // 要求使用 let 或 const 而不是 var
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
